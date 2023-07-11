"use strict";

import { adminPage, bodyPage, extraPage } from "../script/app.js";
import { createConfirm, createLoading } from "./create-template.controller.js";

export const insertLoading = (active) => {
  bodyPage.style.overflow = "hidden";
  switch (active) {
    case true:
      extraPage.innerHTML += createLoading();
      extraPage.style.display = "block";
      break;
    case false:
      const loading = document.querySelector(".load-products");
      bodyPage.style.overflow = "auto";
      extraPage.removeChild(loading);
      extraPage.style.display = "none";
    break;
  }
}

export const insertConfirm = (product, active) => {
  bodyPage.style.overflow = "hidden";
  switch (active) {
    case true:
      adminPage.style.filter = "blur(12px)";
      extraPage.innerHTML += createConfirm(product);
      extraPage.style.display = "flex";
      break;
    case false:
      bodyPage.style.overflow = "auto";
      adminPage.style.filter = "none";
      const modal = document.querySelector(".modal-confirm");
      extraPage.removeChild(modal);
      break;
  }
}
