"use strict";

import { createCard } from "../controllers/create-template.controller.js";
import { getParamByUrl } from "../controllers/get-param.controller.js";
import { insertLoading } from "../controllers/loading.controller.js";
import { extraPage, titleApp } from "../script/app.js";
import { getCategoryById } from "../services/category.service.js";
import { getProducts } from "../services/product.service.js";

const categoryId = getParamByUrl("category");
const header = document.querySelector(".products__header");
const titleCategory = document.querySelector(".products__header__title");

header.style.display="none";
insertLoading(true, extraPage);

if (location.search === ""){
  location.href = "../pages/error/404.html";
} else {
  getCategoryById(categoryId).then(category => {
    if (category.name === undefined){
      location.href = "../pages/error/404.html";
    } else {
      header.style.display="flex";
      insertLoading(false, extraPage);
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
