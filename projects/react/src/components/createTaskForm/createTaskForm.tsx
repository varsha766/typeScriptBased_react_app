import React, { FC, ReactElement, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/status';
import { Priority } from './enums/priority';
export const CreateTaskForm: FC = (): ReactElement => {
  // declare component state
  // setting states for each field
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStauts] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
        <Stack sx={{ width: '100%' }} spacing={2}>
          <TaskTitleField onChange={(e) => setTitle(e.target.value)} />
          <TaskDescriptionField
            onChange={(e) => setDescription(e.target.value)}
          />
          <TaskDateField value={date} onChange={(date) => setDate(date)} />
          <Stack direction="row" spacing={2}>
            <TaskSelectField
              label="Status"
              name="status"
              value={status}
              onChange={(e) => setStauts(e.target.value as string)}
              items={[
                {
                  value: Status.todo,
                  label: Status.todo.toUpperCase(),
                },
                {
                  value: Status.inProgress,
                  label: Status.inProgress.toUpperCase(),
                },
                {
                  value: Status.completed,
                  label: Status.completed.toUpperCase(),
                },
              ]}
            />
            <TaskSelectField
              label="Priority"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as string)}
              items={[
                {
                  value: Priority.low,
                  label: Priority.low,
                },
                {
                  value: Priority.normal,
                  label: Priority.normal,
                },
                {
                  value: Priority.high,
                  label: Priority.high,
                },
              ]}
            />
          </Stack>
        </Stack>
      </Typography>
    </Box>
  );
};
