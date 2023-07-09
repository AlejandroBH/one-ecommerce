"use strict";

import { createCard } from "../controllers/create-template.controller.js";
import { getParamByUrl } from "../controllers/get-param.controller.js";
import { insertLoading } from "../controllers/extra.controller.js";
import { titleApp, viewProductImage, viewProductInfoDescription, viewProductInfoPrice, viewProductInfoTitle } from "../script/app.js";
import { getProductById, getProducts } from "../services/product.service.js";

insertLoading(true);

const productId = getParamByUrl("id");

if (location.search === "") {
  location.href = "../pages/error/404.html";
} else {
  getProductById(productId).then(data => {
    if (data.name === undefined) {
      location.href = "../pages/error/404.html";
    } else {
      document.title = `${data.name} - ${titleApp}`;
      viewProductImage.setAttribute("src", data.image);
      viewProductImage.setAttribute("alt", data.name);
      viewProductInfoTitle.textContent = data.name;
      viewProductInfoPrice.textContent = `$ ${data.price}`;
      viewProductInfoDescription.textContent = data.description;
      getProducts().then(product => {
      insertLoading(false);

        const arrProduct = [];
        let limit = 0;
        
        for (let item of product) {
          if (item.category == data.category) {
            if (item.id == productId){
              continue;
            }
            arrProduct.push(item);
          }
        }
        if (arrProduct.length >= 6) {
          limit = 6
        } else {
          limit = arrProduct.length;
        }
        for (let i = 0; i < limit; i++) {
          createCard(arrProduct[i]);
        }
        const prodcutCard = document.querySelectorAll(".products__cards__item");
        for (let item of prodcutCard) {
          item.classList.add("item-limit");
        }
      });
    }
  });
}
