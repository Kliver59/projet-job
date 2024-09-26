import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, _next) => {
  console.error(err);

  if (err.code === 11000) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ msg: "L'adresse email existe déjà" });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
};

export default errorHandler;
