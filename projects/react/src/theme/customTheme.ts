import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgb(168,85,247,.80)',
      main: 'rgb(168,85,247,.65)',
      dark: 'rgb(168,85,247,.28)',
    },
    background: {
      paper: '#151515',
      default: 'rgb(0,0,0,.96)',
    },
  },
});
