import app from "./app";
import createRecipe from "./endpoints/createRecipe";
import createUser from "./endpoints/createUser";
import getMyProfile from "./endpoints/getMyProfile";
import getProfile from "./endpoints/getProfile";
import getRecipe from "./endpoints/getRecipe";
import login from "./endpoints/login";

app.post("/signup", createUser);
app.post("/login", login);
app.get("/user/profile", getMyProfile);
app.get("/user/:id", getProfile);
app.post("/recipe", createRecipe);
app.get("/recipe/:id", getRecipe);
