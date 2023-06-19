import React, { FC, ReactElement } from 'react';
// FC:- function componenet an interface used for functional components

import { ThemeProvider, CssBaseline } from '@mui/material';
// ThemeProvider: used to set custom theme
// CssBaseline used to reset the basic value ased on the theme we passed
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';
// function App() {
//   return <h1>Hello World</h1>
// }

// we have converted function keyword declartion to arrow function
//
const App:FC = ():ReactElement => {
  return (<ThemeProvider theme={customTheme}>
    <CssBaseline>
      <Dashboard/>

    </CssBaseline>
  </ThemeProvider>)
}
export default App;
