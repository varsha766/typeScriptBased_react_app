import { Task } from './tasks.entity';
import { AppDataSource } from '../../index';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
class TasksController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    let allTasks: Task[];
    try {
      allTasks = await AppDataSource.getRepository(Task).find({
        order: {
          date: 'ASC',
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);
    } catch (error) {
      return res.json({ error: 'Internal server error' }).status(500);
    }
  }
}
export const taskController = new TasksController();
