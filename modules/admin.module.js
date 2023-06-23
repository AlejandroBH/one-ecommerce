"use strict";

import { createCardAdmin } from "../controllers/create-card.controller.js";
import { getProducts } from "../services/product.service.js";

getProducts().then(data => {
  for (let item of data) {
    createCardAdmin(item);
  }

  const cardUpd = document.querySelectorAll('[data-card-udp]');
  const cardDel = document.querySelectorAll('[data-card-del]');

  cardUpd.forEach((item) => {
    item.addEventListener('click', () => {
      const attr = item.getAttribute('data-card-udp');
      location.href = `upd-product.html?id=${attr}`;
    });
  });

  cardDel.forEach((item) => {
    item.addEventListener('click', () => {
      const attr = item.getAttribute('data-card-del');
      // TODO (crear funcion para eliminar)
      alert('Eliminar ID='+ attr);
    });
  });
});
