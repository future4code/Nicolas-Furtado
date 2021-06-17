import { app } from "./app";
import { signup } from "./controllers/signup";
import { createTask } from "./controllers/createTask";
import { getTaskById } from "./controllers/getTaskById";
import { login } from "./controllers/login";
import { getAllUsers } from "./controllers/getAllUsers";

app.post("/user/signup", signup);
app.post("/user/login", login);
app.post("/user/all", getAllUsers);

app.put("/task", createTask);
app.get("/task/:id", getTaskById);
