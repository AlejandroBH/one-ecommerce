'use strict';

import { url } from "../script/app.js";

export const getProducts = () => {
  return fetch(`${url}/product`).then(resp => resp.json());
}

export const getProductById = (id) => {
  return fetch(`${url}/product/${id}`).then(resp => resp.json());
}

export const getParamByUrl = (param) => {
  const valueSearch = window.location.search;
  const urlParams = new URLSearchParams(valueSearch);
  return urlParams.get(param);
}