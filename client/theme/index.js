import { createTheme } from '@mui/material';
import { colors } from './variables';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.primaryText,
    },
    divider: colors.border,
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default theme;
