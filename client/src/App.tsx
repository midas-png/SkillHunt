import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { defaultTheme } from 'features';
import { Layout } from 'layout';

export const App: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </Router>
  );
};
