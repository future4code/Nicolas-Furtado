import { Request, Response } from "express";

const ping = (req: Request, res: Response): void => {
  res.send("pong");
};

export default ping;
