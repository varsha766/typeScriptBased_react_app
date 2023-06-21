import React, { FC, ReactElement } from 'react';
// FC:- function componenet an interface used for functional components
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
// ThemeProvider: used to set custom theme
// CssBaseline used to reset the basic value ased on the theme we passed
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';
import { ReactQueryDevtools } from 'react-query/devtools';
import ComposeContext from './context/composed.context';
import { rootContext } from './context/root.context';

// function App() {
//   return <h1>Hello World</h1>
// }

// we have converted function keyword declartion to arrow function

// Create a query client.Query clinet used make sync between frontend and backend
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    // Incapsulating application within the query client provider
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
