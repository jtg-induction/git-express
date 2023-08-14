import { createTheme } from '@mui/material/styles';
import { colors } from './variables';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default theme;
