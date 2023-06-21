import { Box, Grid, Alert, LinearProgress } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';
import { useQuery, useMutation } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { Status } from '../createTaskForm/enums/status';
import { IUpdateTask } from '../createTaskForm/interfaces/IUpdateTask';
import { countTasks } from './helpers/countTasks';
export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery('tasks', async () => {
    return await sendApiRequest<ITaskApi[]>(
      'http://localhost:3200/tasks',
      'GET',
    );
  });

  // update task mutation
  const updateTaskMutation = useMutation((data: IUpdateTask) =>
    sendApiRequest('http://localhost:3200/tasks', 'PUT', data),
  );

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  }

  function markCompleteHandler(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of Your Tasks As On {format(new Date(), 'PPPP')}
          {/* PPPP tels we wnat today date month and year */}
        </h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter
            count={data ? countTasks(data, Status.todo) : undefined}
            status={Status.todo}
          />
          <TaskCounter
            count={data ? countTasks(data, Status.inProgress) : undefined}
            status={Status.inProgress}
          />
          <TaskCounter
            count={data ? countTasks(data, Status.completed) : undefined}
            status={Status.completed}
          />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}
            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">
                You do not have created any task yet.Start by creating some
                tasks.
              </Alert>
            )}
            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((task, index) => {
                return task.status === Status.todo ||
                  task.status === Status.inProgress ? (
                  <Task
                    key={index + task.priority}
                    id={task.id}
                    title={task.title}
                    date={new Date(task.date)}
                    description={task.description}
                    status={task.status}
                    priority={task.priority}
                    onStatusChange={onStatusChangeHandler}
                    onClick={markCompleteHandler}
                  />
                ) : (
                  false
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
