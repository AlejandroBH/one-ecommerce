"use strict";

import { productsCards } from "../script/app.js";
import { getProducts } from "../services/product.service.js";

getProducts().then(data => {
  for (let item of data) {
    const template = `
    <div class="products__cards__item">
      <img class="products__cards__item__image" src="${item.image}" alt="${item.name}">
      <h5 class="products__cards__item__name">${item.name}</h5>
      <h5 class="products__cards__item__price">$ ${item.price}</h5>
      <a href="../pages/view-product.html?id=${item.id}" class="products__cards__item__button">Ver producto</a>
    </div>
    `;
    productsCards.innerHTML += template;
  }
});