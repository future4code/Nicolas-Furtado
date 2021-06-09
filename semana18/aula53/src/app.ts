import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


app.listen(process.env.PORT || 2000, () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT || 2000}!`);
});

export default app;
