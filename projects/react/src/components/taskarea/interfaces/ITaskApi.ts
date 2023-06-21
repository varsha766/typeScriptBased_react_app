import { Priority } from '../../createTaskForm/enums/priority';
import { Status } from '../../createTaskForm/enums/status';

export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`; //literal syntax in TS it signifies that priority property is goig to be union of all the value in Priority enum
  status: `${Status}`;
}
