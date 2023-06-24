"use strict";

import { validateForms } from "../controllers/validation.controller.js";

export const productsCards = document.querySelector(".products__cards");
export const adminCards = document.querySelector(".admin__cards");

export const viewProductImage = document.querySelector(".view-product__image");
export const viewProductInfoTitle = document.querySelector(".view-product__info__title");
export const viewProductInfoPrice = document.querySelector(".view-product__info__price");
export const viewProductInfoDescription = document.querySelector(".view-product__info__description");

export const addProductForm = document.querySelector(".add-product__form");
export const addProductImage = document.querySelector("#image-product");
export const addProductCategory = document.querySelector("#category-product");
export const addProductName = document.querySelector("#name-product");
export const addProductPrice = document.querySelector("#price-product");
export const addProductDescription = document.querySelector("#description-product");

const footerForm = document.querySelector(".footer__container__form");

export const titleApp = "Alura Geek";
export const urlApi = "http://localhost:3000";

validateForms();

footerForm.addEventListener("submit", () => {
  const isValid = footerForm.hasAttribute("valid");

  if (isValid) {
    const btnSubmit = document.querySelector("[data-submit-footer]");
    btnSubmit.disabled = true;
    console.log("formulario enviado");
  } else {
    console.log("formulario no enviado");
  }
});
