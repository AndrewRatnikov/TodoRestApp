import { Schema, model } from "mongoose";

// Define schema
const todo = new Schema(
  {
    name: {
      type: String
    },
    done: {
      type: Boolean
    },
    creationTime: {
      type: Date
    }
  },
  {
    collection: "todos"
  }
);

export default model("Todo", todo);
