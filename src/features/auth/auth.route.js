import express from "express";
const router = express.Router();

import * as authController from "../auth/auth.controller.js";

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
