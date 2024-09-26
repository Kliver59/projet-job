import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, _next) => {
  console.error(err);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
};

export default errorHandler;
