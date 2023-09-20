"use strict";

import { logoutSession } from "../controllers/authentication.controller.js";
import { searchProductInput } from "../controllers/search.controller.js";
import { userButtonLogout } from "../script/app.js";

userButtonLogout.addEventListener("click", logoutSession);

searchProductInput(false);
