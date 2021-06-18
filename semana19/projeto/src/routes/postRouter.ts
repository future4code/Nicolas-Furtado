import express from "express";
import { createPost } from "../controller/post/createPost";
import { getPost } from "../controller/post/getPost";

export const postRouter = express.Router();

postRouter.post("/", createPost);
postRouter.get("/:id", getPost);