"use strict";

import { logoutSession, validateSession } from "../controllers/authentication.controller.js";
import { createCardAdmin } from "../controllers/create-template.controller.js";
import { insertConfirm, insertLoading } from "../controllers/extra.controller.js";
import { userButtonLogout } from "../script/app.js";
import { getProducts } from "../services/product.service.js";

insertLoading(true);

getProducts().then(data => {
  insertLoading(false);

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

  cardDel.forEach((item, id) => {
    item.addEventListener("click", () => {
      const attribute = item.getAttribute("data-card-del");
      insertConfirm(data[id]);
      // delProductById(attribute);
    });
  });
});

userButtonLogout.addEventListener("click", logoutSession);

validateSession();
