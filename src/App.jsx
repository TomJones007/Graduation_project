import { Route, Routes } from 'react-router'
import './App.css'
import './index.css'
import Delivery from './Pages/Delivery/Delivery.jsx'
import About from './Pages/AboutUs/About.jsx'
import News from './Pages/News/News.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import Contract from './Pages/Contract/Contract.jsx'


function App() {


  return (
    <>
   
     <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
  

    </>
  )
}

export default App
