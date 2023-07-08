"use strict";

import { Category } from "../models/category.model.js";
import { urlApi } from "../script/app.js";

export const getCategory = async () => {
  try {
    const response = await fetch(`${urlApi}/category`);
    return await response.json();
  } catch (error) {
    location.href = '../pages/error/503.html';
    console.log(error);
  }
}

export const getCategoryById = async (id) => {
  try {
    const response = await fetch(`${urlApi}/category/${id}`);
    return await response.json();
  } catch (error) {
    location.href = '../pages/error/503.html';
    console.log(error);
  }
}

export const setCategory = async (name) => {
  const addCategory = new Category(name);
  try {
    const response = await fetch(`${urlApi}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(addCategory)
    });
    return response;
  } catch (error) {
    location.href = '../pages/error/503.html';
    console.log(error);
  }
}
