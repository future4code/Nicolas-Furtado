import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import moment from 'moment';

//string to data moment("22/07/2002", "DD/MM/YYYY").format('YYYY-MM-DD');
//data to string moment("2002-07-22").format('DD/MM/YYYY');

app.put("/user", async (req: Request, res: Response) => {
  try {
    if (!req.body.name) {
      throw Error("Digite um nome");
    }
    if (!req.body.nickname) {
      throw Error("Escolha um nome de usuário");
    }
    if (!req.body.email) {
      throw Error("Digite um e-mail");
    }

    await connection.raw(`
    INSERT INTO
      TodoListUser(name, nickname, email)
    VALUES
      (
        "${req.body.name}",
        "${req.body.nickname}",
        "${req.body.email}"
      )
    `);
    res.status(200).send({ message: "Usuário cadastrado" });
  } catch (error) {
    if (error.sqlMessage.includes("nickname")) {
      res
        .status(400)
        .send({ message: "Já existe um usuário com esse nickname" });
    }
    if (error.sqlMessage.includes("email")) {
      res.status(400).send({ message: "Já existe um usuário com esse email" });
    }
    res.status(500).send({ message: error.message });
  }
});

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    if (Number(req.params.id) < 1) {
      throw Error("Invalid id!");
    }
    const [result] = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = ${Number(req.params.id)}
    `);
    if (!result.length) {
      throw Error("User not found!");
    }
    let user = result[0];
    if (req.body.name) {
      user.name = req.body.name;
    }
    if (req.body.nickname) {
      user.nickname = req.body.nickname;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    await connection.raw(`
    UPDATE
      TodoListUser
    SET
      nickname = "${user.nickname}",
      name = "${user.name}",
      email = "${user.email}"
    WHERE
      id = ${req.params.id};
  `);
    res.status(200).send({ message: "User update!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    if (Number(req.params.id) < 1) {
      throw Error("Invalid id!");
    }
    const [result] = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = ${Number(req.params.id)}
    `);
    if (!result.length) {
      throw Error("User not found!");
    }
    res.send(result[0]);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

app.put("/task", async (req: Request, res: Response) => {
  try {
    if(!req.body.title){
      throw Error ('Digite um título');
    }
    if(!req.body.description){
      throw Error ('Digite uma descrição');
    }
    if(!req.body.data){
      throw Error ('põe uma data ae poar');
    }
    if(!req.body.creator_user_id){
      throw Error ('Digite um id de usuário');
    }
    await connection.raw(`
    INSERT INTO
      TodoListTask (title, description, limit_date, creator_user_id)
    VALUES
      (
        "${req.body.title}",
        "${req.body.description}",
        "${moment(req.body.data, "DD/MM/YYYY").format('YYYY-MM-DD')}",
       "${req.body.creator_user_id}"
      )  
    `);
    res.status(200).send({message: 'Tarefa criada com sucesso!'})
  } catch (error) {
    res.status(500).send({message: error.message});
  }
  
});
  
app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    let [result] = await connection.raw(`
    SELECT
      TodoListTask.id,
      TodoListTask.title,
      TodoListTask.description,
      TodoListTask.limit_date,
      TodoListTask.status,
      TodoListUser.id as UserId,
      TodoListUser.nickname as UserNickname
    FROM
      TodoListTask
    INNER JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
    WHERE
      TodoListTask.id = ${req.params.id};
    `);
    if (!result.length) {
      throw Error("Task not found!");
    }
    result[0].limit_date = moment(result[0].limit_date).format('DD/MM/YYYY');
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
    SELECT * FROM TodoListUser;
    `)
    res.status(200).send(result[0])
  } catch (error) {
    res.status(500).send({message: "Internal error!"});
  }
});

app.get("/task/all", async(req: Request, res: Response)=>{
  try {
    const [result] = await connection.raw(`
      SELECT * FROM TodoListTask;
    `);
    res.status(200).send(result[0])
  } catch (error) {
    res.status(500).send({message: "Internal error!"});
  }
})