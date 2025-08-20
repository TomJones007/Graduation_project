import { ThemeProvider } from '../public/Themes/Context.jsx'
import './App.css'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import './index.css'


function App() {




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
