import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const [users] = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
});
app.get("/user/search", async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;
    const [users] = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE "${name}"
   `);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.sqlMessage);
  }
});
app.get("/user/search/:type", async (req: Request, res: Response) => {
  try {
    const type = req.params.type.toLowerCase() as string;
    if (type !== "teacher" && type !== "cx" && type !== "operations") {
      throw Error("parametros inválidos!");
    }
    const [users] = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        WHERE type = "${type}";
     `);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
