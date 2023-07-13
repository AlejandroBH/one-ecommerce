"use strict";

import { bodyPage, extraPage } from "../script/app.js";
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
