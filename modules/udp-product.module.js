"use strict";

import { validateSession } from "../controllers/authentication.controller.js";
import { getParamByUrl } from "../controllers/get-param.controller.js";
import { insertLoading } from "../controllers/extra.controller.js";
import { addProductForm, addProductCategory, addProductDescription, addProductImage, addProductName, addProductPrice, titleApp } from "../script/app.js";
import { getCategory } from "../services/category.service.js";
import { getProductById, putProductById } from "../services/product.service.js";

insertLoading(true);

const productId = getParamByUrl("id");

if (location.search === "") {
  location.href = "../pages/error/404.html";
} else {
  getCategory().then(data => {
    for (let item of data) {
      const itemCategory = document.createElement("option");
      itemCategory.setAttribute("value",`${item.id}`);
      itemCategory.innerHTML = `${item.id} - ${item.name}`;
      addProductCategory.appendChild(itemCategory);
    }
    getProductById(productId).then(data => {
      insertLoading(false);
      if (data.name === undefined) {
        location.href = "../pages/error/404.html";
      } else {
        document.title = `Actualizar ${data.name} - ${titleApp}`;
        addProductImage.value = data.image;
        addProductCategory.value = data.category;
        addProductName.value = data.name;
        addProductPrice.value = data.price;
        addProductDescription.value = data.description;
        addProductForm.addEventListener("submit", () => {
          const isValid = addProductForm.hasAttribute("valid");
          if(isValid){
            const btnSubmit = document.querySelector("[data-submit-add]");
            btnSubmit.disabled = true;
            putProductById(productId, addProductImage.value, addProductCategory.value, addProductName.value, addProductPrice.value, addProductDescription.value);
          }
        });
      }
    });
  });
}

validateSession();
