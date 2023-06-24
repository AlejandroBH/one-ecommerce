"use strict";

import { getParamByUrl } from "../controllers/get-param.controller.js";
import { titleApp, viewProductImage, viewProductInfoDescription, viewProductInfoPrice, viewProductInfoTitle } from "../script/app.js";
import { getProductById } from "../services/product.service.js";

const productId = getParamByUrl("id");

if (location.search === "") {
  location.href = "../pages/error.html";
} else {
  getProductById(productId).then(data => {
    if (data.name === undefined) {
      location.href = "../pages/error.html";
    } else {
      document.title = `${data.name} - ${titleApp}`;
      viewProductImage.setAttribute("src", data.image);
      viewProductImage.setAttribute("alt", data.name);
      viewProductInfoTitle.textContent = data.name;
      viewProductInfoPrice.textContent = `$ ${data.price}`;
      viewProductInfoDescription.textContent = data.description;
    }
  });
}
