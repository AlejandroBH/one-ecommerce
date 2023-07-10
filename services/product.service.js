"use strict";

import { urlApi } from "../script/app.js";
import { Product } from "../models/product.model.js"

export const getProducts = async () => {
  try {
    const response = await fetch(`${urlApi}/product`);
    return await response.json();
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${urlApi}/product/${id}`);
    return await response.json();
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}

export const setProduct = async (image, category, name, price, description) => {
  const addProduct = new Product(image, category, name, price, description);
  try {
    const response = await fetch(`${urlApi}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(addProduct)
    });
    location.href = "admin.html";
    return response;
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}

export const putProductById = async (id, image, category, name, price, description) => {
  const putProduct = new Product(image, category, name, price, description);
  try {
    const response = await fetch(`${urlApi}/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(putProduct)
    });
    location.href = "admin.html";
    return response;
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}

export const delProductById = async (id) => {
  try {
    const response = await fetch(`${urlApi}/product/${id}`, {
      method: "DELETE"
    });
    location.reload();
    return response;
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}
