"use strict";

import { logoutSession } from "../controllers/authentication.controller.js";
import { userButtonLogout } from "../script/app.js";

userButtonLogout.addEventListener("click", logoutSession);
