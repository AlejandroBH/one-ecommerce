"use strict";

import { createCard } from "../controllers/create-card.controller.js";
import { getProducts } from "../services/product.service.js";

getProducts().then(data => {
  for (let item of data) {
    createCard(item);
  }
});
