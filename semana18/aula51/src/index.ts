import app from "./app";
import editUser from "./data/editUser";
import createUser from "./data/createUser";
import login from "./data/login";


app.post("/user/signup", createUser);
app.put("/user/edit/:id", editUser);
app.post("/user/login", login);
//app.get('/user/profile', )