"use strict";

import { validateForms } from "../controllers/validation.controller.js";

export const productsCards = document.querySelector('.products__cards');
export const adminCards = document.querySelector('.admin__cards');

export const viewProductImage = document.querySelector('.view-product__image');
export const viewProductInfoTitle = document.querySelector('.view-product__info__title');
export const viewProductInfoPrice = document.querySelector('.view-product__info__price');
export const viewProductInfoDescription = document.querySelector('.view-product__info__description');

export const addProductImage = document.querySelector('#image-product');
export const addProductCategory = document.querySelector('#category-product');
export const addProductName = document.querySelector('#name-product');
export const addProductPrice = document.querySelector('#price-product');
export const addProductDescription = document.querySelector('#description-product');

export const titleApp = 'Alura Geek';
export const url = "http://localhost:3000";

validateForms();
