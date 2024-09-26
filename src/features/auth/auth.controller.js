import * as authService from "../auth/auth.service.js";

const register = async (req, res) => {
  console.log(req.body);
  const user = await authService.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
  res.send("login");
};

export { login, register };
