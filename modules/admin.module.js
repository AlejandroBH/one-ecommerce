"use strict";

import { logoutSession, validateSession } from "../controllers/authentication.controller.js";
import { createCardAdmin } from "../controllers/create-template.controller.js";
import { insertLoading } from "../controllers/loading.controller.js";
import { loadingPage, userButtonLogout } from "../script/app.js";
import { delProductById, getProducts } from "../services/product.service.js";

insertLoading(true, loadingPage);

getProducts().then(data => {
  insertLoading(false, loadingPage);

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
      setTimeout(() => {
        location.reload();
      }, 1000);
    });
  });
});

userButtonLogout.addEventListener("click", logoutSession);

validateSession();
