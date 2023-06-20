import { Router, Request, Response } from 'express';
// Fire the router function
export const taskRouter: Router = Router();
taskRouter.get('/tasks', (req: Request, res: Response) => {
  res.send('Express +Typescript Server');
});
