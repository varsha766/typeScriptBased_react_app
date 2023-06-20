import { Router } from 'express';
import { createValidator, updateValidator } from './tasks.validator';
import { taskController } from './tasks.controller';

/*Fire the router function*/
export const tasksRouter: Router = Router();

// Create a default route.
tasksRouter.get('/tasks', taskController.getAll);

tasksRouter.post('/tasks', createValidator, taskController.createTaskDetil);

tasksRouter.put('/tasks', updateValidator, taskController.updateTaskDetail);
