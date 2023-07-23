"use strict";

import { loginFormAlert, userButton } from "../script/app.js";
import { getUserByInput, getUsers } from "../services/user.service.js";
import { createAlert } from "./create-template.controller.js";

export const validateAuthentication = async (email, password) => {
  const btnSubmitLogin = document.querySelector("[data-submit-login]");
  const user = await getUserByInput(email, password);
  
  if (user) {
    loginFormAlert.innerHTML = createAlert("success", "Acceso correcto, por favor espere.");
    btnSubmitLogin.disabled = true;
    setTimeout(() => {
      localStorage.setItem("login", user.name);
      location.href = "../index.html";
    }, 1000)
  } else {
    loginFormAlert.innerHTML = createAlert("danger", "Los datos ingresados son incorrectos.");
  }
}

export const validateUser = () => {
  const login = localStorage.getItem("login");

  if (login !== null) {
    getUsers().then(data => {
      for (let user of data) {
        if (login === user.name) {
          if (user.admin === true) {
            // Is Admin
            userButton.innerHTML = user.name;
            userButton.setAttribute("href", "pages/admin.html");
          } else {
            // Not Admin
            userButton.innerHTML = user.name;
            userButton.setAttribute("href", "pages/cart.html");
          }
        }
      }
    })
  }
}

export const validateSession = () => {
  const login = localStorage.getItem("login");

  if (login !== null) {
    getUsers().then(data => {
      for (let user of data) {
        if (login === user.name && !user.admin) {
          location.href = "/pages/error.html";
        }
      }
    })
  } else {
    location.href = "/pages/error.html";
  }
}

export const logoutSession = () => {
  localStorage.clear();
  location.href = "../index.html";
}
