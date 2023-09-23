
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createTheme from "./companents/theme.tsx";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootredux from './db/redux.tsx';

const store = createStore(rootredux)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={createTheme}>
  <CssBaseline>
    <BrowserRouter>
     <App />
  </BrowserRouter>
  </CssBaseline>
    </ThemeProvider>
  </Provider>
  </React.StrictMode>

);
