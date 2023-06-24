'use strict';

import { addProductForm, addProductCategory, addProductDescription, addProductImage, addProductName, addProductPrice, titleApp } from "../script/app.js";
import { getParamByUrl, getProductById, updProductById } from "../services/product.service.js";

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

      addProductForm.addEventListener('submit', () => {
        const isValid = addProductForm.hasAttribute('valid');

        if(isValid){
          const btnSubmit = document.querySelector('[data-submit-add]');
          btnSubmit.disabled = true;
          setTimeout(() => {
            updProductById(productId, addProductImage.value, addProductCategory.value, addProductName.value, addProductPrice.value, addProductDescription.value);
            location.href = 'admin.html';
          }, 1000);
        }
      });
    }
  });
}
