import "express-async-errors";
import express from "express";
const app = express();
import errorHandler from "../middlewares/error-handler.js";
import notFound from "../middlewares/not-found.middlewares.js";
import connectDB from "../config/db.config.js";

connectDB();

app.use(express.json());

import { auth } from "../src/features/auth/index.js";

app.use("/api/v1/auth", auth);

app.use(notFound);
app.use(errorHandler);

export default app;
