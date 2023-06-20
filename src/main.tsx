import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { LoanProvider } from './context/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoanProvider>
      <App />
    </LoanProvider>
  </React.StrictMode>,
)
