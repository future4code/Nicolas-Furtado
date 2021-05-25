import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

enum TYPE {
  ADMIN = "admin",
  NORMAL = "normal",
}

let users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: TYPE.NORMAL,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: TYPE.ADMIN,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: TYPE.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: TYPE.ADMIN,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: TYPE.NORMAL,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: TYPE.ADMIN,
    age: 60,
  },
];

app.get("/users/all", (req: Request, res: Response) => {
  res.status(200).send(users);
});

app.get("/users/:name", (req: Request, res: Response) => {
  try {
    const name = req.params.name.toLowerCase();
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(name)
    );
    if (!result.length) {
      throw Error("Nenhum usuario com esse nome encontrado!");
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

app.get("/users/type/:type", (req: Request, res: Response) => {
  try {
    const type = req.params.type.toLowerCase();
    const result = users.filter((user) => user.type === type);
    if (!result.length) {
      throw Error("Nenhum usuario com esse tipo encontrado!");
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

app.post("/users/create", (req: Request, res: Response) => {
  try {
    const { name, type, email } = req.body;
    const age = Number(req.body.age);
    if (
      name === "" ||
      (type !== TYPE.NORMAL && type !== TYPE.ADMIN) ||
      email === "" ||
      age <= 0
    ) {
      throw Error("dados inválidos");
    }
    const newUser = {
      id: users.length + 1,
      name,
      type,
      email,
      age,
    };
    users.push(newUser);
    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(2000, () => {
  console.log("server on!");
});
