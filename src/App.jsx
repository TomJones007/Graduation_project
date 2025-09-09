import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Delivery from './Pages/Delivery/Delivery.jsx'
import About from './Pages/AboutUs/About.jsx'
import News from './Pages/News/News.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import Contract from './Pages/Contract/Contract.jsx'
import Unknown from './Pages/MainPage/Unknown/Unknown.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { RouterPages } from "../src/Router/Router.jsx"

function App() {


  return (
    <>
     <Routes>
         {RouterPages.map(page => (
          <Route key={page.id} path={page.href} element={page.component} />
        ))}
      </Routes>


    </>
  )
}

export default App
