import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/globalStyles'
import { defaultTheme } from '../src/features'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: defaultTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];