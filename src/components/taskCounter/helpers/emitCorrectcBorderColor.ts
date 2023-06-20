import { Status } from '../../createTaskForm/enums/status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectBorderColor = (status: TaskCounterStatusType) => {
  switch (status) {
    case Status.todo:
      return '#e57373';
    case Status.inProgress:
      return '#fff176';
    case Status.completed:
      return '#4caf50';
  }
};
