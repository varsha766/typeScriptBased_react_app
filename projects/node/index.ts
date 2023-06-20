import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
// Instatiate express app
const app: Express = express();
dotenv.config();

// Create Database connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
});

// Define server port
const port = process.env.PORT;
//Create a default route
app.get('/', (req: Request, res: Response) => {
  res.send('Express +Typescript Server');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.log('Error during Data Source initialization', err);
  });
