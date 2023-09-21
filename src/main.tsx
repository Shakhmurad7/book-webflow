
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createTheme from "./companents/theme.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ThemeProvider theme={createTheme}>
  <CssBaseline>
    <BrowserRouter>
     <App />
  </BrowserRouter>
  </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>

);
