'use strict';

import { addProductCategory, addProductDescription, addProductForm, addProductImage, addProductName, addProductPrice } from "../script/app.js";
import { setProduct } from "../services/product.service.js";

addProductForm.addEventListener('submit', () => {
  const image = addProductImage.value;
  const category = addProductCategory.value;
  const name = addProductName.value;
  const price = addProductPrice.value;
  const description = addProductDescription.value;
  const isValid = addProductForm.hasAttribute('valid');

  if (isValid) {
    const btnSubmit = document.querySelector('[data-submit-add]');
    btnSubmit.disabled = true;
    setTimeout(() => {
      setProduct(image, category, name, price, description);
      location.href = 'admin.html';
    }, 1000);
  }
});
