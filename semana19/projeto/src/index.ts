import express, { Express, Request, Response } from "express";
import cors from "cors";
import { signup } from "./controller/user/signup";
import { login } from "./controller/user/login";
import { createPost } from "./controller/post/createPost";
import { getPost } from "./controller/post/getPost";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server running on port 3003");
});

app.post("/users/signup", signup);
app.post("/users/login", login);

app.post("/posts/create", createPost);
app.get("/posts/:id", getPost);