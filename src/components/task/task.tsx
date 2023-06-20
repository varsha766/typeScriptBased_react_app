import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
export const Task: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      Test
      {/*Task header */}
      {/*Task Description */}
      {/*Task Footer */}
    </Box>
  );
};
