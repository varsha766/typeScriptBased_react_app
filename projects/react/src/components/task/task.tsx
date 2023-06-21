import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/status';
import { Priority } from '../createTaskForm/enums/priority';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';
export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Random description',
    status = Status.completed,
    priority = Priority.normal,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
    id,
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
        id={id}
        status={status}
      />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};
