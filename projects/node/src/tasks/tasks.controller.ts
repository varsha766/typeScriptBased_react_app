import { Task } from './tasks.entity';
import { AppDataSource } from '../../index';
import { instanceToPlain } from 'class-transformer';
export class TaskController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}
  //@ts-ignore
  public async getAll(): Promise<Task[]> {
    let allTasks: Task[];
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      console.log(allTasks, 'allTasks');
      return allTasks;
    } catch (error) {
      console.log(error);
    }
  }
}
