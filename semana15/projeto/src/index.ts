import express, { Response, Request } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

type extract = {
  value: number;
  date: string;
  description: string;
};

type user = {
  id: number;
  name: string;
  cpf: string;
  birth: string;
  balance: number;
  extract: extract[];
};

let users: user[] = [
  {
    id: 0,
    name: "Janis Costadelli",
    cpf: "45399415852",
    birth: "9/5/2002",
    balance: 3000,
    extract: [
      {
        value: 20,
        date: "21/5/2021",
        description: "meia que brilha no escuro",
      },
      {
        value: 0,
        date: "9/5/2021",
        description: "atenção do nicolas",
      },
    ],
  },
  {
    id: 1,
    name: "Nicolas Alexandre",
    cpf: "01988016614",
    birth: "22/7/2006",
    balance: 300,
    extract: [
      {
        value: 20,
        date: "21/5/2021",
        description: "chapeu de gnomo",
      },
      {
        value: 2000,
        date: "9/5/2021",
        description: "atenção da janis",
      },
    ],
  },
];

app.get("/user/balance", (req: Request, res: Response) => {
  try {
    const name = req.body.name as string;
    const cpf = req.body.cpf as string;
    const result = users.find((user) => {
      if (user.name.toLowerCase().includes(name.toLowerCase())) {
        return true;
      }
    });
    if (result && cpf === result.cpf) {
      res
        .status(200)
        .send({ name: result.name, cpf: result.cpf, balance: result.balance });
    } else {
      throw Error("user not found or invalid cpf");
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.put("/user/addBalance", (req: Request, res: Response) => {
  try {
    const name = req.body.name as string;
    const cpf = req.body.cpf as string;
    const balance = Number(req.body.balance);

    const result = users.find((user) => {
      if (user.name.toLowerCase().includes(name.toLowerCase())) {
        return true;
      }
    });
    if (result && cpf === result.cpf && balance > 0) {
      users[result.id].balance += balance;
      res.status(200).send({message: 'Success!'})
    }else{
      throw Error ('user not found, invalid cpf or negative balance')
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("servidor online!");
});
