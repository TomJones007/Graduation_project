import { useTranslation } from 'react-i18next'
import { ThemeProvider } from '../public/Themes/Context.jsx'
import './App.css'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import './index.css'

function App() {

const {t} =  useTranslation()


  return (
    <>
    <div className="site">

    <ThemeProvider>
    <Navbar/>
    <Header/>

    </ThemeProvider>

    </div>
    </>
  )
}

export default App
