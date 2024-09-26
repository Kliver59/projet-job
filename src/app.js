import express from "express";
const app = express();
import errorHandler from "../middlewares/error-handler.js";
import notFound from "../middlewares/not-found.middlewares.js";
import connectDB from "../config/db.config.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(errorHandler);
app.use(connectDB);

export default app;
