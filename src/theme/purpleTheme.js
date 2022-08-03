import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#7F74BD',
    },
    secondary: {
      main: '#E3ADE3',
    },
    background: {
      main: '#D2CEE7',
    },
    error: {
      main: red.A400,
    },
  },
});
