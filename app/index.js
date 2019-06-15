import express from "express";
import bosyParser from "body-parser";
import mongoose from "mongoose";

import config from "./config";
import indexRoutes from "./routes/indexRoutes";
import todoRoutes from "./routes/todoRoutes";

const app = express();

// use promises
mongoose.Promise = global.Promise;

mongoose
  .connect(config.DB, { useNewUrlParser: true, dbName: "todos" })
  .then(() => console.log("DB connect"))
  .catch(err => console.log(`error in DB connection: ${err}`));

// parse application/x-www-form-urlencoded
app.use(bosyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bosyParser.json());

// Routes
app.use("/", indexRoutes);
app.use("/todo", todoRoutes);

app.listen(config.APP_PORT, () => {
  console.log(`Server is running on port ${config.APP_PORT}`);
});
