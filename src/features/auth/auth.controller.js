import * as authService from "../auth/auth.service.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  const user = await authService.create(req.body);

  res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
  res.send("login");
};

export { login, register };
