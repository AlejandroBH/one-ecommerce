"use strict";

import { createLoading } from "./create-template.controller.js";

export const insertLoading = (active, node) => {
  switch (active) {
    case true:
      node.innerHTML += createLoading();
      break;
    case false:
      const loading = document.querySelector(".load-products");
      node.removeChild(loading);
    break;
  }
}
