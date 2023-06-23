"use strict";

import { validateForms } from "../controllers/validation.controller.js";

export const productsCards = document.querySelector('.products__cards');
export const adminCards = document.querySelector('.admin__cards');

export const viewProductImage = document.querySelector('.view-product__image');
export const viewProductInfoTitle = document.querySelector('.view-product__info__title');
export const viewProductInfoPrice = document.querySelector('.view-product__info__price');
export const viewProductInfoDescription = document.querySelector('.view-product__info__description');

export const url = "http://localhost:3000";

validateForms();
