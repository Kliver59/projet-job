import * as authService from "../auth/auth.service.js";
import { StatusCodes } from "http-status-codes";
import * as usersService from "../users/user.service.js";
import { UnauthenticatedError } from "../../errors/errors.js";

const register = async (req, res) => {
  const user = await authService.create(req.body);
  const token = user.createAccessToken();
  res.status(StatusCodes.CREATED).json({ user, token });
};

const login = async (req, res) => {
  const user = await usersService.get({ email: req.body.email });

  if (!user) throw new UnauthenticatedError("Identifiants invalides");

  const isPasswordCorrect = await user.comparePasswords(req.body.password);

  if (!isPasswordCorrect)
    throw new UnauthenticatedError("Identifiants invalides");

  res.send("login");
};

export { login, register };
