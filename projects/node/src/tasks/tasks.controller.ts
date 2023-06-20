import { Task } from './tasks.entity';
import { AppDataSource } from '../../index';
export class TaskController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}
  public async getAll(): Promise<Task[]> {
    let allTasks: Task[];
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
    } catch (error) {
      console.log(error);
    }
  //  return allTasks;
  }
}
