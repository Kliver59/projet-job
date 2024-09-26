import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, _next) => {
  console.error(err);
  const msg =
    err.message || "Une erreur s'est produite, veuillez réessayer plus tard";
  const statusCodes = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  if (err.code === 11000) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ msg: "L'adresse email existe déjà" });
  }

  res.status(statusCodes).json({ msg });
};

export default errorHandler;
