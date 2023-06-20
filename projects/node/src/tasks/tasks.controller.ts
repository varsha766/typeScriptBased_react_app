import { Task } from './tasks.entity';
import { AppDataSource } from '../../index';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { UpdateResult } from 'typeorm';
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

  public async createTaskDetil(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // create new instance of class of the task

    const newTask = new Task();

    // add the reuired property to the task object
    newTask.title = req.body.title;
    newTask.date = req.body.date;
    newTask.description = req.body.description;
    newTask.priority = req.body.priority;
    newTask.status = req.body.status;

    //Add the new task to the db
    let createdTask: Task;
    try {
      createdTask = await AppDataSource.getRepository(Task).save(newTask);
      // convert instance to plan method
      createdTask = instanceToPlain(createdTask) as Task;
      return res.json(createdTask).status(201);
    } catch (e) {
      return res.json({ error: 'Internal server error' }).status(500);
    }
  }

  public async updateTaskDetail(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Try to find the tasks exists
    let task: Task | null;

    try {
      task = await AppDataSource.getRepository(Task).findOne({
        where: { id: req.body.id },
      });
    } catch (e) {
      return res.json({ error: 'Internal server error' }).status(500);
    }
    // Return 400 if task is null
    if (!task) {
      return res
        .json({ error: `Task with taskId ${req.body.id} does not exists` })
        .status(404);
    }
    //Declare a variable for updateTask
    let updatedtask: UpdateResult;
    try {
      updatedtask = await AppDataSource.getRepository(Task).update(
        req.body.id,
        plainToInstance(Task, { status: req.body.status }),
      );
      updatedtask = instanceToPlain(updatedtask) as UpdateResult;
      return res.json(updatedtask).status(200);
    } catch (error) {
      return res.json({ error: 'Internal server error' }).status(500);
    }
    // update the task

    // convert to plain text
  }
}
export const taskController = new TasksController();
