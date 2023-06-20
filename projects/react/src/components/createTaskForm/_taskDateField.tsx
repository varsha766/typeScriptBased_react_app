import React, { FC, ReactElement } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';// provide date library to date picker
import { TextField } from '@mui/material';
import PropTypes from 'prop-types'
import {IDateField} from './interfaces/IDateField'
export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  // Destructuring props
    const {
        value = new Date(),
        disabled = false,
        onChange=(date)=> console.log(date)
}=props
  
  return (
      <>
             {/* this component take a prop i.e date adpter */}
          
          <LocalizationProvider
              dateAdapter={AdapterDateFns}
          >
              <DesktopDatePicker
                  label="Task Date"
                  value={value}
                  disabled={disabled}
                  onChange={onChange}
         
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value:PropTypes.instanceOf(Date)
}