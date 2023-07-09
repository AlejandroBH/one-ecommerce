"use strict";

import { extraPage } from "../script/app.js";
import { createConfirm, createLoading } from "./create-template.controller.js";

export const insertLoading = (active) => {
  switch (active) {
    case true:
      extraPage.innerHTML += createLoading();
      extraPage.style.display = "block";
      break;
    case false:
      const loading = document.querySelector(".load-products");
      extraPage.removeChild(loading);
      extraPage.style.display = "none";
    break;
  }
}

export const insertConfirm = (product, active) => {
  switch (active) {
    case true:
      extraPage.innerHTML += createConfirm(product);
      extraPage.style.display = "flex";
      break;
    case false:
      const modal = document.querySelector(".modal-confirm");
      extraPage.removeChild(modal);
      break;
  }
}
