'use strict';

import { url } from "../script/app.js";
import { Product } from "../models/product.model.js"

export const getProducts = () => {
  return fetch(`${url}/product`).then(resp => resp.json());
}

export const getProductById = (id) => {
  return fetch(`${url}/product/${id}`).then(resp => resp.json());
}

export const updProductById = (id, image, category, name, price, description) => {
  const newProduct = new Product(image, category, name, price, description);
  return fetch(`${url}/product/${id}`,{
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(newProduct)
  }).then(resp => resp)
}

export const getParamByUrl = (param) => {
  const valueSearch = window.location.search;
  const urlParams = new URLSearchParams(valueSearch);
  return urlParams.get(param);
}
