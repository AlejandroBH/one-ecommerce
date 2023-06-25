'use strict';

import { createCategoryTitle } from "../controllers/create-card.controller.js";
import { products } from "../script/app.js";
import { getCategory } from "../services/category.service.js";

getCategory().then(category => {
  for (let item of category) {
    createCategoryTitle(item);
    // TODO
    products.innerHTML += `mostrar maximo 6 tarjetas categoria ${item.id} (${item.name})`;
  }
})
