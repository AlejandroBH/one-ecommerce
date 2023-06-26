"use strict";

import { createCardAdmin } from "../controllers/create-template.controller.js";
import { delProductById, getProducts } from "../services/product.service.js";

getProducts().then(data => {
  for (let item of data) {
    createCardAdmin(item);
  }

  const cardUpd = document.querySelectorAll("[data-card-udp]");
  const cardDel = document.querySelectorAll("[data-card-del]");

  cardUpd.forEach((item) => {
    item.addEventListener("click", () => {
      const attribute = item.getAttribute("data-card-udp");
      location.href = `upd-product.html?id=${attribute}`;
    });
  });

  cardDel.forEach((item) => {
    item.addEventListener("click", () => {
      const attribute = item.getAttribute("data-card-del");
      delProductById(attribute);
    });
  });
});
