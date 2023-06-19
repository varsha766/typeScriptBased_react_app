import React, { FC, ReactElement, useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';// provide date library to date picker
import { TextField } from '@mui/material';

export const TaskDateField: FC = (): ReactElement => {
  // state
  const [date, setDate] = useState<Date | null>(null);

  return (
      <>
             {/* this component take a prop i.e date adpter */}
          
          <LocalizationProvider
              dateAdapter={AdapterDateFns}
          >
              <DesktopDatePicker
                  label="Task Date"
                  value={date}
                  onChange={(newValue)=>setDate(newValue)}
         
        />
      </LocalizationProvider>
    </>
  );
};