import app from "./app";
import getAddress from "./middleware/getAddress";
import createUser from "./routes/createUser";
import getUserProfile from "./routes/getUserProfile";
import login from "./routes/login";
import ping from "./routes/ping";

app.get("/ping", ping);
app.post("/user/login", login);
app.post("/user/signup", createUser);
app.get("/user/profile", getUserProfile);
