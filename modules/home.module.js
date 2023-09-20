"use strict";

import { validateUser } from "../controllers/authentication.controller.js";
import { createCardHome, createCategoryTitle } from "../controllers/create-template.controller.js";
import { insertLoading } from "../controllers/extra.controller.js";
import { searchProductInput } from "../controllers/search.controller.js";
import { getCategory } from "../services/category.service.js";
import { getProducts } from "../services/product.service.js";

insertLoading(true);

getCategory().then(category => {
  insertLoading(false);

  for (let itemCat of category) {
    createCategoryTitle(itemCat);

    getProducts().then(data => {
      const arrProd = [];
    
      for (let itemProd of data) {
        if (itemProd.category === itemCat.id) {
          arrProd.push(itemProd);

          const CardCategory = document.querySelector(`[data-category-${itemCat.id}]`);
          CardCategory.innerHTML += createCardHome(itemProd);
        }
      }
    });
  }
});

validateUser();

searchProductInput(true);
