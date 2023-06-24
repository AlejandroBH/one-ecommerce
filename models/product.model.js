"use strict";

import { generateId } from "../controllers/generate-id.controller.js";

export class Product {
  constructor(image, category, name, price, description) {
    this.image = image.trim(),
    this.category = category.trim(),
    this.name = name.trim(),
    this.price = parseInt(price),
    this.description = description.trim(),
    this.id = generateId();
  }
}
