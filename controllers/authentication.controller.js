"use strict";

import { getUserById, getUsers } from "../services/user.service.js";

export const validateAuthentication = (email, password) => {
  getUsers().then(users => {
    for (let user of users) {
      if (user.email === email) {
        console.log(`cuenta ${user.name} existe`);
        getUserById(user.id).then(user => {
          if (user.password === password) {
            // TODO (generar alerta si contraseña es correcta y guardar sesion en local storage)
            console.log('clave correcta');
          } else {
            // TODO (generar alerta si contraseña es incorrecta)
            console.log('clave incorrecta');
          }
        })
      } else {
        // TODO (generar alerta si cuenta no existe)
      }
    }
  })
}
