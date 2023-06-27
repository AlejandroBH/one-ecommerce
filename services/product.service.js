"use strict";

import { urlApi } from "../script/app.js";
import { Product } from "../models/product.model.js"

export const getProducts = () => {
  return fetch(`${urlApi}/product`).then(response => response.json());
}

export const getProductById = (id) => {
  return fetch(`${urlApi}/product/${id}`).then(response => response.json());
}

export const setProduct = (image, category, name, price, description) => {
  const addProduct = new Product(image, category, name, price, description);
  return fetch(`${urlApi}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(addProduct)
  }).then(response => response);
}

export const putProductById = (id, image, category, name, price, description) => {
  const putProduct = new Product(image, category, name, price, description);
  return fetch(`${urlApi}/product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(putProduct)
  }).then(response => response);
}

export const delProductById = (id) => {
  return fetch(`${urlApi}/product/${id}`, {
    method: "DELETE"
  }).then(response => response)
}
