import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/status';
import { emitCorrectBorderColor } from './helpers/emitCorrectcBorderColor';
export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { count = 0, status = Status.inProgress } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            order: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColor(status)}`,
          }}
        >
          <Typography color="#ffffff">10</Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          Subtitle
        </Typography>
      </Box>
    </>
  );
};
