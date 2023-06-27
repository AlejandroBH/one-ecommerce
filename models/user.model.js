"use strict";

export class User {
  id
  admin = false
  constructor(name, email, password){
    this.name = name.trim(),
    this.email = email.trim(),
    this.password = password.trim()
  }
}
