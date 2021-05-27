import app from "./app";
import { Response, Request } from "express";
import connection from "./connection";

app.get("/actor/searchByName", async (req: Request, res: Response) => {
  try {
    const result = await connection("Actor")
      .select("*")
      .where("name", "LIKE", `%${req.body.name}%`);
    res.status(200).send(result);
  } catch (error) {
    // res.status(500).send(error.sqlMessage);
    res.status(500).send("Internal Error!");
  }
});

app.get("/actor/searchById", async (req: Request, res: Response) => {
  try {
    const result = await connection("Actor")
      .select("*")
      .where({id: req.body.id});
    res.status(200).send(result);
  } catch (error) {
    // res.status(500).send(error.sqlMessage);
    res.status(500).send("Internal Error!");
  }
});

app.get("/actor/genderQuantity", async (req: Request, res: Response) => {
  try {
    if (req.body.gender !== "male" && req.body.gender !== "female") {
      throw Error("Invalid params");
    }
    const result = await connection("Actor")
      .count("*", { as: "quantidade" })
      .where({ gender: req.body.gender });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/actor/salary", async (req: Request, res: Response) => {
  try {
    await connection("Actor")
      .update({ salary: req.body.salary })
      .where({ id: req.body.id });
    res.status(200).send("Update salary!");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/actor", async (req: Request, res: Response) => {
  try {
    await connection("Actor").delete("*").where({ id: req.body.id });
    res.status(200).send("Actor deleted!");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/actor/genderAverageSalary", async (req: Request, res: Response) => {
  try {
    if (req.body.gender !== "male" && req.body.gender !== "female") {
      throw Error("Invalid params");
    }
    const result = await connection("Actor")
      .avg("salary", {as: "average"})
      .where({ gender: req.body.gender });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

