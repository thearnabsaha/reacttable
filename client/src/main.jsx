import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {DataProvider} from './Context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>,
)
