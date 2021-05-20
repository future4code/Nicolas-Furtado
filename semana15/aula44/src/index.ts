import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express());



app.listen(2000, ()=>{
  console.log('server on!')
})