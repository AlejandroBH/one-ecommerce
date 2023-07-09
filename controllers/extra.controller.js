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

export const insertConfirm = (product) => {
  extraPage.style.display = "flex";
  extraPage.innerHTML += createConfirm(product);
}
