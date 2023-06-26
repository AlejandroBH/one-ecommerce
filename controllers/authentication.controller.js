"use strict";

import { loginFormAlert } from "../script/app.js";
import { getUserById, getUsers } from "../services/user.service.js";
import { createAlert } from "./create-template.controller.js";

export const validateAuthentication = (email, password) => {
  const btnSubmitLogin = document.querySelector("[data-submit-login]");
  getUsers().then(users => {
    for (let user of users) {
      if (user.email === email) {
        getUserById(user.id).then(user => {
          if (user.password === password) {
            loginFormAlert.innerHTML = createAlert("success", "Acceso correcto, porfavor espere.");
            btnSubmitLogin.disabled = true;
            setTimeout(() => {
              location.href = "admin.html";
            }, 1000);
          } else {
            loginFormAlert.innerHTML = createAlert("danger", "La contraseña es incorrecta.");
          }
        })
      } else {
        loginFormAlert.innerHTML = createAlert("danger", "La cuenta ingresada no existe.");
      }
    }
  })
}
