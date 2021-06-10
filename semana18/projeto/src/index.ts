import app from "./app";
import createUser from "./endpoints/createUser";
import getMyProfile from "./endpoints/getMyProfile";
import login from "./endpoints/login";

app.post("/signup", createUser);
app.post("/login", login);
app.get('/profile', getMyProfile);