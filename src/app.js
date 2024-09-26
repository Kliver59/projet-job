import express from "express";
const app = express();
import errorHandler from "../middlewares/error-handler.js";
import notFound from "../middlewares/not-found.middlewares.js";
import connectDB from "../config/db.config.js";

connectDB();

app.use(notFound);
app.use(errorHandler);

export default app;
