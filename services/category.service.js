"use strict";

import { Category } from "../models/category.model.js";
import { url } from "../script/app.js";

export const getCategory = () => {
  return fetch(`${url}/category`).then(response => response.json());
}

export const setCategory = (name) => {
  const addCategory = new Category(name);
  return fetch(`${url}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(addCategory)
  }).then(response => response);
}
