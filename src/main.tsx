
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // azul principal
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(201,232,250)', // rosa secundario
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App/>
     </BrowserRouter>
    </ThemeProvider>
    
  </StrictMode>,
)
