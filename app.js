import express from "express";
import bosyParser from "body-parser";
import mongoose from "mongoose";

import config from "./config";
import todoRoutes from "./routes";

const app = express();

mongoose.connect(config.DB, { useNewUrlParser: true, dbName: "todos" });

// parse application/x-www-form-urlencoded
app.use(bosyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bosyParser.json());

// Routes
app.get("/", (request, response) =>
  response.status(200).json({ working: true })
);
app.use("/todo", todoRoutes);

app.listen(config.APP_PORT, () => {
  console.log(`Server is running on port ${config.APP_PORT}`);
});
