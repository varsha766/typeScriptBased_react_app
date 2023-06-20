import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
// Instatiate express app
const app: Express = express();
// Define server port
const port = process.env.PORT;
//Create a default route
app.get("/", (req: Request, res: Response) => {
  res.send("Express +Typescript Server");
});
// Start listening to the requests on the defined port

app.listen(port);
