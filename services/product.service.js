'use strict';

import { url } from "../script/app.js";
import { Product } from "../models/product.model.js"

export const getProducts = () => {
  return fetch(`${url}/product`).then(response => response.json());
}

export const getProductById = (id) => {
  return fetch(`${url}/product/${id}`).then(response => response.json());
}

export const setProduct = (image, category, name, price, description) => {
  const addProduct = new Product(image, category, name, price, description);
  return fetch(`${url}/product`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(addProduct)
  }).then(response => response);
}

export const putProductById = (id, image, category, name, price, description) => {
  const putProduct = new Product(image, category, name, price, description);
  return fetch(`${url}/product/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(putProduct)
  }).then(response => response);
}

export const getParamByUrl = (parameter) => {
  const valueSearch = window.location.search;
  const urlParams = new URLSearchParams(valueSearch);
  return urlParams.get(parameter);
}
