import { changeLanguage, t } from "i18next"
import { NavLink } from "react-router"
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const {t} =  useTranslation()
    const ChangeLang = par => {
    i18next.changeLanguage(par)
}

  return (
    <>
   
     <div className="flex m-5 p-5 items-center justify-around bg-white rounded-2xl">

    <div className="flex gap-5 bg-white">
        <img src="../../../public/Icons/Navbar_Icons/Logo.svg" alt="logo" />
    

        <img className="p-5 bg-[#F5F5F7]" src="../../../public/Icons/Navbar_Icons/Arrow-down.svg" alt="arrow_down" />
    </div>

    <div className="flex gap-6 items-center">
        <div className="flex gap-1">
       <img className="w-6" src="../../../public/Icons/Navbar_Icons/Russia-flag-icon.svg" alt="language_flag" />
       <img className="w-6" src="../../../public/Icons/Navbar_Icons/United-kingdom-flag-icon.svg" alt="language_flag" />
        </div>
        
       
            <button onClick={()=>ChangeLang('Ru')}>{t('langRu')}Ru</button>
            <button onClick={()=>ChangeLang('Eng')}>{t('langEn')}Eng</button>
      
        

        <ul className="flex gap-9 m-5">
            <NavLink to="/MainPage">Главная</NavLink>
            <NavLink to="/delivery">Доставка</NavLink>
            <NavLink to="about">О нас</NavLink>
            <NavLink to="news">Новости</NavLink>
        </ul>
        <div className="flex gap-3">
        <img src="../../../public/Icons/Navbar_Icons/Telephone.svg" alt="phone" />
        <p>+38 097 699 34 38</p>
        </div>
    </div>

    <div className="flex gap-4">
        <button className="p-3 rounded-2xl border-gray-400 border-1 ">
            <img src="../../../public/Icons/Navbar_Icons/Bell.svg" alt="bell" />
        </button>

        <button className="p-3 rounded-2xl border-gray-400 border-1 " >
            <img src="../../../public/Icons/Navbar_Icons/Heart.svg" alt="heart" />
        </button>

        <button className="p-3 rounded-2xl border-gray-400 border-1 ">
            <img src="../../../public/Icons/Navbar_Icons/Account.svg" alt="account" />     
        </button>

        <button className="flex gap-2 items-center p-3 pr-6 pl-6 rounded-2xl border-gray-400 border-1">
            <p>Корзина</p>
            <img src="../../../public/Icons/Navbar_Icons/Basket.svg" alt="basket" />
        </button>
    </div>
    
    </div>

   
    </>
  )
}

export default Navbar