import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = props => (
  <ThemeProvider theme={theme}>{App}</ThemeProvider>
)

export default App
