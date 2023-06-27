"use strict";

import { User } from "../models/user.model.js";
import { urlApi } from "../script/app.js";

export const getUsers = () => {
  return fetch(`${urlApi}/user`).then(response => response.json());
}

export const getUserById = (id) => {
  return fetch(`${urlApi}/user/${id}`).then(response => response.json());
}

export const setUser = (name, email, password) => {
  const addUser = new User(name, email, password)
  return fetch(`${urlApi}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(addUser)
  }).then(response => response);
}
