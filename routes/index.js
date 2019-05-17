import { Router } from "express";
import todo from "../models/Todo";

const todoRouter = Router();

// get all todos
todoRouter.get((req, res, next) => {
  todo.find((err, todos) => {
    if (err) {
      return next(new Error(err));
    }

    res.json(todos);
  });
});

// add new todo
todoRouter.post((req, res) => {
  todo.create(
    {
      name: req.body.name,
      done: folse,
      creationTime: new Date()
    },
    (err, todo) => {
      if (err) {
        return res.status(400).json({ error: "Unable to create todo" });
      }
      res.status(201).json(todo);
    }
  );
});

// delete todo
todoRouter.delete((req, res) => {
  const {
    body: { id }
  } = req;

  if (!id) {
    return res.status(404).json({ error: "specify id" });
  }

  todo.findByIdAndRemove(id, err => {
    if (err) {
      return res.status(404).json({ error: "todo not found" });
    }
    res.status(200).json({ done: true });
  });
});

// update todo
todoRouter.patch((req, res) => {
  const {
    body: { id, name, done }
  } = req;

  if (!id) {
    return res.status(404).json({ error: "specify id" });
  }

  todo.findByIdAndUpdate(id, { name, done }, (err, todo) => {
    if (err) {
      return res.status(404).json({ error: "todo not found" });
    }
    res.status(201).json(todo);
  });
});

export default todoRouter;
