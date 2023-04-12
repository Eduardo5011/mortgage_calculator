import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1:{
      fontSize: "20px"
    }
  }
});

export default darkTheme;