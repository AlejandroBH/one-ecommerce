"use strict";

import { validateAuthentication } from "../controllers/authentication.controller.js";
import { loginEmail, loginForm, loginPassword } from "../script/app.js";

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateAuthentication(loginEmail.value, loginPassword.value);
})
