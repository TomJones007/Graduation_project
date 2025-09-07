import React from 'react'
import { Link, NavLink } from 'react-router'

const Footer = () => {
  return (
    <>
  <div className="bg-white flex flex-col gap-2">
    <div className="flex justify-around">

    <div className="flex gap-20 mt-10 ">
      
    <div className="flex flex-col gap-3">
      <img src="../../../public/Icons/Navbar_Icons/Logo.svg" alt="logo" />

      <div className="flex gap-5 mt-9">
        <button className='flex bg-black p-4 rounded-[5px] gap-2 w-[150px] '>
          <img className='h-10px' src="/Icons/Map_Icons/Apple.svg" alt="" />
          <img className='h-10px' src="/Icons/Map_Icons/AppStore.svg" alt="" />

        </button>
        <button className='flex bg-black p-4 rounded-[5px] gap-2 w-[150px]'>
          <img className='h-10px' src="/Icons/Map_Icons/GooglePlayIcon.svg" alt="" />
          <img className='h-10px' src="/Icons/Map_Icons/GooglePlay.svg" alt="" />
        </button>
      </div>

      <p className='text-[#9E9E9E]'>© Ninja Sushi. All rights reserved.</p>
    </div>


    <div className="flex flex-col gap-5">
    <p className='text-[#686870] text-[14px]'>Навигация:</p>


    <ul className='flex flex-col gap-3'>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/">Меню</NavLink>
      <NavLink to="/delivery">Доставка</NavLink>
      <NavLink to="about">Вакансии</NavLink>
      <NavLink to="news">Новости</NavLink>
    </ul>
  
    </div>

    <div className="flex flex-col gap-5">
      <p className='text-[#686870] text-[14px]'>Оформить заказ:</p>
      <ul className='flex flex-col gap-3'>
        <li>+38 (067) 436 61 27</li>
        <li>+38 (066) 031 76 30</li>
        <li>+38 (093) 924 98 28</li>
      </ul>
    </div>

    <div className="flex flex-col gap-5">
    <p className='text-[#686870] text-[14px]'>Время работы:</p>
    <ul className='flex flex-col gap-3'>
      <li>с 11:00 до 22:45</li>
      <li>с 22.45 до 06.00</li>
      <a className='text-[#686870]' href="">Ночная доставка</a>
    </ul>
    </div>

    <div className="flex flex-col gap-4">
    <p className='text-[#686870] text-[14px]'>Мы в соц. сетях:</p>

   <div className="flex gap-3">
    <button>
      <img src="/Icons/Footer_Icons/Facebook.svg" alt="Facebook" />
    </button>

    <button>
      <img src="/Icons/Footer_Icons/Instagram.svg" alt="Instagram" />
    </button>
   </div>

    <a href="https://t.me/ninjasushi">
   <button className='flex p-5 gap-2 items-center bg-[#F5F5F7] rounded-2xl'>
    <img src="/Icons/Footer_Icons/Telegram.svg" alt="Telegram" />
    <p className='text-[#039BE5] text-2xl'>Техподдержка</p>
   </button>
    </a>
    </div>

    </div>

    <div className="mt-10 flex flex-col gap-5">
      
      <p className='text-6xl font-bold'>#NinjaSushi</p>
      <p className='text-[#686870] text-[14px] w-50'>Ninja Sushi в фотографиях наших клиентов</p>
      <a classname="cursor-pointer" href="https://www.instagram.com/">
        <button className='text-[#00CC2D] p-5 rounded-[10px] bg-[#F5F5F7]'>Перейти в instagram</button>
      </a>
    </div>

    </div>

    <div className="flex gap-300 items-center m-10">
     
      
     <NavLink to="/contract">Политика конфиденциальности</NavLink>

      <div className="payment flex gap-5">
      <a href="https://www.mastercard.com/us/en.html">
        <img src="Icons/Footer_Icons/MasterCard.svg" alt="MasterCard" />
      </a>

      <a href="https://usa.visa.com/">
        <img src="/Icons/Footer_Icons/Visa.svg" alt="Visa" />
      </a>

      <a href="https://privatbank.ua/">
        <img src="Icons/Footer_Icons/PB.svg" alt="PB" />
      </a>
      </div>

    </div>
  </div>
    </>
  )
}

export default Footer