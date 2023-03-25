import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';

export function renderWithTheme(component: ReactNode) {
  return render(
    <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>
  );
}
