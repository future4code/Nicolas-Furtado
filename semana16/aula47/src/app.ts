import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(2000, ()=>{
  console.log("Servidor funcionando na porta 2000!");
})

export default app;