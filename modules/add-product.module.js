"use strict";

import { validateSession } from "../controllers/authentication.controller.js";
import { insertLoading } from "../controllers/loading.controller.js";
import { addProductCategory, addProductDescription, addProductForm, addProductImage, addProductName, addProductPrice, extraPage } from "../script/app.js";
import { getCategory } from "../services/category.service.js";
import { setProduct } from "../services/product.service.js";

insertLoading(true, extraPage);

getCategory().then(data => {
  insertLoading(false, extraPage);
  for (let item of data) {
    const itemCategory = document.createElement("option");
    itemCategory.setAttribute("value",`${item.id}`);
    itemCategory.innerHTML = `${item.id} - ${item.name}`;
    addProductCategory.appendChild(itemCategory);
  }
});

addProductForm.addEventListener("submit", () => {
  const image = addProductImage.value;
  const category = addProductCategory.value;
  const name = addProductName.value;
  const price = addProductPrice.value;
  const description = addProductDescription.value;
  const isValid = addProductForm.hasAttribute("valid");

  if (isValid) {
    const btnSubmit = document.querySelector("[data-submit-add]");
    btnSubmit.disabled = true;
    setProduct(image, category, name, price, description);
    setTimeout(() => {
      location.href = "admin.html";
    }, 1000);
  }
});

validateSession();
