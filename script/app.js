"use strict";

import { createSearchProduct, emptySearchProduct } from "../controllers/create-template.controller.js";
import { searchResponsive } from "../controllers/search.controller.js";
import { validateForms } from "../controllers/validation.controller.js";
import { getProducts } from "../services/product.service.js";

export const products = document.querySelector(".products");
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
export const loginForm = document.querySelector(".login__form");
export const loginEmail = document.querySelector("#login-email");
export const loginPassword = document.querySelector("#login-password");
export const loginFormAlert = document.querySelector(".login__form__alert");
export const extraPage = document.querySelector(".extra");
export const bodyPage = document.querySelector("body");
export const headerLogo = document.querySelector("[data-header-logo]");
export const searchContainer = document.querySelector("[data-search-container]");
export const searchInput = document.querySelector("[data-search-input]");
export const searchDropdown = document.querySelector("[data-search-dropdown]");
const searchResult = document.querySelector("[data-search-result]");
export const userButton = document.querySelector("[data-user-button]");
export const userButtonLogout = document.querySelector("[data-user-button-logout]");
export const searchIcon = document.querySelector("[data-search-icon]");
const footerForm = document.querySelector(".footer__container__form");

export const titleApp = "Alura Geek";
export const urlApi = "https://api-alurageek-eko9.onrender.com"; // Production
// export const urlApi = "http://localhost:3000"; // Develop

validateForms();
searchResponsive();

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

searchInput.addEventListener("input", async () => {
  searchDropdown.style.display = "block";
  searchResult.innerHTML = "";

  const products = await getProducts();
  const searchProduct = searchInput.value.toLowerCase();

  const matchingProducts = products.filter((item) => 
    item.name.toLowerCase().includes(searchProduct) && searchProduct !== ""
  );

  if (matchingProducts.length > 0) {
    searchResult.innerHTML = matchingProducts.map((item) => createSearchProduct(item)).join('');
  } else {
    searchResult.innerHTML = emptySearchProduct();
  }
});
