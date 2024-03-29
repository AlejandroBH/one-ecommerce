"use strict";

import { createCard } from "../controllers/create-template.controller.js";
import { getParamByUrl } from "../controllers/get-param.controller.js";
import { insertLoading } from "../controllers/extra.controller.js";
import { titleApp } from "../script/app.js";
import { getCategoryById } from "../services/category.service.js";
import { getProducts } from "../services/product.service.js";
import { searchProductInput } from "../controllers/search.controller.js";

const categoryId = getParamByUrl("category");
const header = document.querySelector(".products__header");
const titleCategory = document.querySelector(".products__header__title");

header.style.display="none";
insertLoading(true);

if (location.search === ""){
  location.href = "../pages/error/404.html";
} else {
  getCategoryById(categoryId).then(category => {
    if (category.name === undefined){
      location.href = "../pages/error/404.html";
    } else {
      header.style.display="flex";
      insertLoading(false);
      document.title = `${category.name} - ${titleApp}`;
      titleCategory.innerHTML += `Categoria ${category.name}`;
      getProducts().then(product => {
        product.forEach((item) => {
          if(item.category == categoryId){
            createCard(item);
          }
        });
      });
    }
  });
}

searchProductInput(false);
