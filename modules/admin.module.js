"use strict";

import { logoutSession, validateSession } from "../controllers/authentication.controller.js";
import { createCardAdmin } from "../controllers/create-template.controller.js";
import { insertConfirm, insertLoading } from "../controllers/extra.controller.js";
import { searchProductInput } from "../controllers/search.controller.js";
import { extraPage, userButtonLogout } from "../script/app.js";
import { delProductById, getProducts } from "../services/product.service.js";

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
      insertConfirm(data[id], true);

      const btnConfirm = document.querySelector("[data-modal-confirm]");
      const btnCancel = document.querySelector("[data-modal-cancel]");

      btnConfirm.addEventListener("click", () => {
        delProductById(attribute);
        insertConfirm(data[id], false);
      });

      btnCancel.addEventListener("click", () => {
        extraPage.style.display = "none";
        insertConfirm(data[id], false);
      });
    });
  });
});

userButtonLogout.addEventListener("click", logoutSession);

validateSession();

searchProductInput(false);
