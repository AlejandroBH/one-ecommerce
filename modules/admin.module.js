"use strict";

import { adminCards } from "../script/app.js";
import { getProducts } from "../services/product.service.js";

getProducts().then(data => {
  for (let item of data) {
    const template = `
    <div class="admin__cards__item">
      <div class="admin__cards__item__image">
          <div class="admin__cards__item__image__controls">
              <span class="material-symbols-outlined">delete</span>
              <span class="material-symbols-outlined">edit</span>
          </div>
          <img src="${item.image}" alt="${item.name}">
      </div>
      <h5 class="admin__cards__item__name">${item.name}</h5>
      <h5 class="admin__cards__item__price">$ ${item.price}</h5>
      <h5 class="admin__cards__item__id">#${item.id}</h5>
    </div>
    `;
    adminCards.innerHTML += template;
  }
});