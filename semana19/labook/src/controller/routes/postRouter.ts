import express from "express";
import { PostController } from "../postController";

export const postRouter = express.Router();
const postController = new PostController();

postRouter.post("/", postController.createPost);
postRouter.get("/:id", postController.getPostById);