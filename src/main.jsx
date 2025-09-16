import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import '../public/Languages/i18n.js'
import { Provider } from 'react-redux'
import { store } from "./Store/Store.js"


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Provider store={store}>
   <App />
   </Provider>
   </BrowserRouter>
  
)
