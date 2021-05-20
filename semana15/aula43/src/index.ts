import { countries, country } from "./countries";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(2000, () => {
  console.log("servidor iniciado!");

  app.get("/countries/all", (req: Request, res: Response) => {
    res.send({ countries });
  });

  app.get("/countries/search", (req: Request, res: Response) => {
    try {
      const name = req.query.name as string;
      const continent = req.query.continent as string;
      const capital = req.query.name as string;
      let result: country[] = [];

      if (name) {
        result = countries.filter((c) => {
          return c.name.toLowerCase().includes(name.toLowerCase());
        });
      } else {
        throw Error("Preencha o campo nome!");
      }
      if (continent) {
        result = countries.filter((c) => {
          return c.continent.toLowerCase().includes(continent.toLowerCase());
        });
      }
      if (capital) {
        result = countries.filter((c) => {
          return c.capital.toLowerCase().includes(capital.toLowerCase());
        });
      }
      if (!result.length) {
        throw Error("Nenhum país encontrado");
      }
      res.send({ result });
    } catch (error) {
      res.send({ message: error.message });
    }
  });

  app.put("/countries/edit/:id", (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      let result = countries.find((c) => c.id === id);
      if (result) {
        req.body.name && (result.name = req.body.name);
        req.body.capital && (result.capital = req.body.capital);
      } else {
        throw Error("País não encontrado");
      }
      res.send({ result });
    } catch (error) {
      res.send({message: error.message})
    }
  });

  app.get("/countries/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = countries.find((c) => c.id === id);
    res.send({ country: result });
  });
});
