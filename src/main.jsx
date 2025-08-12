import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router'

// fghgf
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <App />
   </BrowserRouter>
  
)
