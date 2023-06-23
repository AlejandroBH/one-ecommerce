'use strict';

import { addProductCategory, addProductDescription, addProductImage, addProductName, addProductPrice, titleApp } from "../script/app.js";
import { getParamByUrl, getProductById } from "../services/product.service.js";

const productId = getParamByUrl('id');

if (location.search === '') {
  location.href = '../pages/error.html';
} else {
  getProductById(productId).then(data => {
    if (data.name === undefined) {
      location.href = '../pages/error.html';
    } else {
      document.title = `Actualizar ${data.name} - ${titleApp}`;
      addProductImage.value = data.image;
      addProductCategory.value = data.category;
      addProductName.value = data.name;
      addProductPrice.value = data.price;
      addProductDescription.value = data.description;
    }
  });
}
