import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createTheme, ThemeProvider } from '@mui/material';

import { LoanProvider } from './context/index.ts'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoanProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </LoanProvider>
  </React.StrictMode>,
)
