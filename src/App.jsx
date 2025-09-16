import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { FoodTypes, RouterPages } from "../src/Router/Router.jsx"
import { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import HeaderSlider from './components/Header/HeaderSlider.jsx'

function App() {
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
       const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Скролл вниз → скрываем Navbar
        setShowNavbar(false);
      } else {
        // Скролл вверх → показываем Navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
     window.addEventListener("scroll", handleScroll);
    
      return () => 
        window.removeEventListener("scroll", handleScroll);
      
    }, [lastScrollY])
    

  return (
    <>
    <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}>

       <Navbar/>
    </div>
       <div className="sticky top-0 z-40 mt-[160px] transition-all duration-300">
      <Header/>
       </div>
       
     <Routes>
       
         {RouterPages.map(page => (
          <Route key={page.id} path={page.href} element={page.component} />
        ))}

         {FoodTypes.map(page => (
          <Route key={page.id} path={page.href} element={page.component} />
        ))}
         
      </Routes>

        <Footer/>

    </>
  )
}

export default App
