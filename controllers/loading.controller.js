"use strict";

import { extraPage } from "../script/app.js";
import { createLoading } from "./create-template.controller.js";

export const insertLoading = (active, node) => {
  switch (active) {
    case true:
      node.innerHTML += createLoading();
      extraPage.style.display = "block";
      break;
    case false:
      const loading = document.querySelector(".load-products");
      node.removeChild(loading);
      extraPage.style.display = "none";
    break;
  }
}
