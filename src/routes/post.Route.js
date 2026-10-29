
import { Router } from "express";
import { postsController } from "../controllers/post.controller.js";

export const postsRouter = Router();

postsRouter.get("/", (req, res) =>
  postsController.getAll(req, res)
);

postsRouter.get("/:id", (req, res) =>
  postsController.getById(req, res)
);

postsRouter.post("/", (req, res) =>
  postsController.create(req, res)
);

postsRouter.put("/:id", (req, res) =>
  postsController.update(req, res)
);

postsRouter.delete("/:id", (req, res) =>
  postsController.delete(req, res)
);
