import { changeLanguage } from "i18next"
import { Link, NavLink, useLocation } from "react-router-dom"
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import NotificationsModal from "./NotificationsModal";
import { useState } from "react";
import BrandDropdown from "./BrandDropdown";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} =  useTranslation()
    const ChangeLang = par => {
        i18next.changeLanguage(par)
    }
 

return (
    <>
   {/* <div className="flex justify-center"> */}
     <div className="flex m-5 p-5 items-center justify-around bg-white rounded-2xl">

    <BrandDropdown/>

    <div className="flex gap-6 items-center">
        <div className="flex gap-1">
       <img className="w-6" src="/Icons/Navbar_Icons/Russia-flag-icon.svg" alt="language_flag" />
       <img className="w-6" src="/Icons/Navbar_Icons/United-kingdom-flag-icon.svg" alt="language_flag" />
        </div>
        
       
            <button onClick={()=>ChangeLang('Ru')}>{t('langRu')}Ru</button>
            <button onClick={()=>ChangeLang('Eng')}>{t('langEn')}Eng</button>
      
        

        <ul className="flex gap-9 m-5">
            <Link to="/" className="transition hover:text-orange-500 hover:shadow-2xl hover:scale-105">Главная</Link>
            <Link to="/delivery" className="transition hover:text-orange-500 hover:shadow-2xl hover:scale-105">Доставка</Link>
            <NavLink to="about" className="transition hover:text-orange-500 hover:shadow-2xl hover:scale-105">О нас</NavLink>
            <NavLink to="news"  className="transition hover:text-orange-500 hover:shadow-2xl hover:scale-105">Новости</NavLink>
        </ul>
        <div className="flex gap-3">
        <img src="/Icons/Navbar_Icons/Telephone.svg" alt="phone" />
       <a href="tel: +380976993438" className="transition hover:text-orange-500 hover:shadow-2xl hover:scale-105">+38 097 699 34 38</a> 
        </div>
    </div>

    <div className="flex gap-4">
        <div className="">

        <button  className="group p-3 rounded-2xl border-gray-400 border-1 hover:bg-orange-500 active:bg-orange-500 transition"  onClick={() => setIsOpen(true)}>
            <img src="/Icons/Navbar_Icons/Bell.svg" alt="bell"  className="transition group-hover:invert group-hover:brightness-0 group-hover:contrast-100" />
        </button>
        {isOpen && <NotificationsModal onClose={() => setIsOpen(false)} />}
        </div>

        <button className="group p-3 rounded-2xl border-gray-400 border-1 hover:bg-orange-500 active:bg-orange-500 transition" >
            <img src="/Icons/Navbar_Icons/Heart.svg" alt="heart" className="transition group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/>
        </button>

        <button className="group p-3 rounded-2xl border-gray-400 border-1 hover:bg-orange-500 active:bg-orange-500 transition">
            <img src="/Icons/Navbar_Icons/Account.svg" alt="account" className="transition group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/>     
        </button>

        <button className="group flex gap-2 items-center p-3 pr-6 pl-6 rounded-2xl border-gray-400 border-1  hover:bg-orange-500 active:bg-orange-500 transition" >
            <p className="transition group-hover:invert group-hover:brightness-0 group-hover:contrast-100">Корзина</p>
            <img src="/Icons/Navbar_Icons/Basket.svg" alt="basket" className="transition group-hover:invert group-hover:brightness-0 group-hover:contrast-100"/>
        </button>
    </div>
    
    </div>
    {/* </div> */}
   
    </>
  )
}

export default Navbar
