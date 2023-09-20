"use strict";

import { adminCards, products, productsCards } from "../script/app.js";

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

export const createCardHome = (item) => {
  const template = `
  <div class="products__cards__item item-limit">
    <img class="products__cards__item__image" src="${item.image}" alt="${item.name}">
    <h5 class="products__cards__item__name">${item.name}</h5>
    <h5 class="products__cards__item__price">$ ${item.price}</h5>
    <a href="pages/view-product.html?id=${item.id}" class="products__cards__item__button">Ver producto</a>
  </div>
  `;
  return template;
}

export const createCategoryTitle = (item) => {
  const template = `
  <div class="products__header">
    <h3 class="products__header__title">${item.name}</h3>
    <a href="pages/products.html?category=${item.id}" class="products__header__button">Ver todo <span class="material-symbols-outlined">arrow_forward</span></a>
  </div>
  <div class="products__cards" data-category-${item.id}></div>
  `;
  products.innerHTML += template;
}

export const createAlert = (type, message) => {
  const template = `
  <div class="alert alert-${type}" role="alert">${message}</div>
  `;
  return template;
}

export const createConfirm = (product) => {
  const template = `
  <div class="modal-confirm">
    <h2 class="modal-confirm__title">¿Seguro quieres eliminar?</h2>
    <p class="modal-confirm__subtitle">ID: #${product.id}</p>
    <div class="modal-confirm__btn">
      <button class="btn btn-danger" data-modal-confirm>Confirmar</button>
      <button class="btn btn-secondary" data-modal-cancel>Cancelar</button>
    </div>
  </div>
  `;
  return template;
}

export const createLoading = () => {
  const template = `
  <div class="load-products">
    <span class="loader"></span>
    <h2 class="load-products__title">¡Cargando, por favor espere!</h2>
    <p class="load-products__subtitle">En breve mostramos el contenido.</p>
  </div>
  `;
  return template;
}

export const createSearchProduct = (item, pagefix) => {
  let template = "";

  switch (pagefix) {
    case true: template = `
    <a class="search__container__div__link" href="pages/view-product.html?id=${item.id}">
    <span class="material-symbols-outlined">link</span>${item.name}</a>
    `;
    break;
    case false: template = `
    <a class="search__container__div__link" href="../pages/view-product.html?id=${item.id}">
    <span class="material-symbols-outlined">link</span>${item.name}</a>
    `;
    break;
  }
  return template;
}

export const emptySearchProduct = () => {
  const template = `
  <a class="search__container__div__link empty">
  <span class="material-symbols-outlined">filter_none</span>No hay resultados</a>
  `;
  return template;
}
