import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import lightblue from '@material-ui/core/colors/lightBlue';
import App from './pages/app/app';

const theme = createMuiTheme({
  palette: {
    primary: lightblue,
    secondary: {
      main: '#f50057',
    },
  },
});

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
