import express, { Request, Response } from "express";

const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("This App Is Working");
});
app.listen(4444, () => {
  console.log("Server listening on Port 4444");
});
