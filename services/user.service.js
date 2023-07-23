"use strict";

import { User } from "../models/user.model.js";
import { urlApi } from "../script/app.js";

export const getUsers = async () => {
  try {
    const response = await fetch(`${urlApi}/user`);
    return await response.json();
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${urlApi}/user/${id}`);
    return await response.json();
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}

export const getUserByInput = async (email, password) => {
  try {
    const users = await getUsers();
    for (let user of users) {
      if (user.email === email && user.password === password) {
        return user;
      }
    }
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}

export const setUser = async (name, email, password) => {
  const addUser = new User(name, email, password)
  try {
    const response = await fetch(`${urlApi}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(addUser)
    });
    return response;
  } catch (error) {
    location.href = "../pages/error/503.html";
    console.log(error);
  }
}
