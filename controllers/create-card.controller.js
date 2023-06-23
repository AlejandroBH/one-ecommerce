"use strict";

import { adminCards, productsCards } from "../script/app.js";

export const createCard = (item) => {
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

export const createCardAdmin = (item) => {
  const template = `
  <div class="admin__cards__item">
    <div class="admin__cards__item__image">
        <div class="admin__cards__item__image__controls">
            <span class="material-symbols-outlined" data-card-del="${item.id}">delete</span>
            <span class="material-symbols-outlined" data-card-udp="${item.id}">edit</span>
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
