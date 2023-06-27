"use strict";

import { loginFormAlert, userButton } from "../script/app.js";
import { getUserById, getUsers } from "../services/user.service.js";
import { createAlert } from "./create-template.controller.js";

export const validateAuthentication = (email, password) => {
  const btnSubmitLogin = document.querySelector("[data-submit-login]");
  getUsers().then(users => {
    for (let user of users) {
      if (user.email === email) {
        getUserById(user.id).then(user => {
          if (user.password === password) {
            loginFormAlert.innerHTML = createAlert("success", "Acceso correcto, por favor espere.");
            btnSubmitLogin.disabled = true;
            setTimeout(() => {
              location.href = "../index.html";
              localStorage.setItem("login", user.name);
            }, 1000);
          } else {
            loginFormAlert.innerHTML = createAlert("danger", "Los datos ingresados son incorrectos.");
          }
        })
      } else {
        loginFormAlert.innerHTML = createAlert("danger", "Los datos ingresados son incorrectos.");
      }
    }
  })
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
