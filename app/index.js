import express from "express";
import bosyParser from "body-parser";
import mongoose from "mongoose";

import config from "./config";
import todoRoutes from "./routes";

const app = express();

mongoose
  .connect(config.DB, { useNewUrlParser: true, dbName: "todos" })
  .then(() => console.log("DB connect"))
  .catch(err => console.log(`error in DB connection: ${err}`));

mongoose.Promise = global.Promise;

// parse application/x-www-form-urlencoded
app.use(bosyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bosyParser.json());

// Routes
app.use("/todo", todoRoutes);
app.get("/", (request, response) =>
  response.status(200).json({ working: true })
);

app.listen(config.APP_PORT, () => {
  console.log(`Server is running on port ${config.APP_PORT}`);
});
