import express from "express";
const router = express.Router();
import validate from "../../../middlewares/validation.middlewares.js";

import * as authController from "../auth/auth.controller.js";
import { RegisterUserSchema, LoginUserSchema } from "../users/user.schema.js";

router.post("/register", validate(RegisterUserSchema), authController.register);
router.post("/login", validate(LoginUserSchema), authController.login);

export default router;
