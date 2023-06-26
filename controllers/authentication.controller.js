"use strict";

import { getUserById, getUsers } from "../services/user.service.js";

export const validateAuthentication = (email, password) => {
  getUsers().then(users => {
    for (let user of users) {
      if (user.email === email){
        if (user.email === email) {
          getUserById(user.id).then(user => {
            if (user.password === password) {
              // TODO (generar alerta si contraseña es correcta y guardar sesion en local storage)
            } else {
              // TODO (generar alerta si contraseña es incorrecta)
            }
          })
        }
      } else {
        // TODO (generar alerta si cuenta no existe)
      }
    }
  })
}
