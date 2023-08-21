import { ThemeProvider, CssBaseline } from '@mui/material';

import Routes from '@components/Routes';
import Snackbar from '@components/Snackbar';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes />
        <Snackbar />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
