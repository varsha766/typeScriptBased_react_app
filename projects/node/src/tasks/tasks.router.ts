import { Router, Request, Response } from 'express';
import { TaskController } from './tasks.controller';
// Fire the router function
export const taskRouter: Router = Router();
taskRouter.get('/tasks', async (req: Request, res: Response) => {
  const taskController = new TaskController();
  const alltasks = await taskController.getAll();
  res.json(alltasks).status(200);
});
