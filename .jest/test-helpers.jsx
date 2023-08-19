import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

export const renderWithTheme = (theme, children) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
