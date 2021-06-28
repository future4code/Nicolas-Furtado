import express, { Express } from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { postRouter } from "./routes/postRouter";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server running on port 3003");
});

app.use("/user", userRouter);
app.use("/post", postRouter);
