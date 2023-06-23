"use strict";

import { generateId } from "../controllers/generate-id.controller.js";

export class Product {
  constructor(image, category, name, price, description) {
    this.image = image,
    this.category = category,
    this.name = name,
    this.price = price,
    this.description = description,
    this.id = generateId();
  }
}
