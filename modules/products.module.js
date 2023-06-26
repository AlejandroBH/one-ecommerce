"use strict";

import { createCard } from "../controllers/create-template.controller.js";
import { getParamByUrl } from "../controllers/get-param.controller.js";
import { titleApp } from "../script/app.js";
import { getCategoryById } from "../services/category.service.js";
import { getProducts } from "../services/product.service.js";

const categoryId = getParamByUrl("category");


if (location.search === ""){
  location.href = "../pages/error.html";
} else {
  getCategoryById(categoryId).then(category => {
    if (category.name === undefined){
      location.href = "../pages/error.html";
    } else {
      document.title = `${category.name} - ${titleApp}`;
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
