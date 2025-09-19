import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const [img, setImg] = useState("/Icons/Footer_Icons/Facebook.svg")
  const [inst, setInst] = useState("/Icons/Footer_Icons/Instagram.svg")

  return (
    <>
  <div className="bg-white flex flex-col gap-2 footer">
    <div className="flex justify-around footer-top">

    <div className="flex gap-20 mt-10 ">
      
    <div className="flex flex-col gap-3">
      <img src="/Icons/Navbar_Icons/Logo.svg" alt="logo" />

      <div className="flex gap-5 mt-9">
        <button className='h-10 cursor-pointer hover:scale-105 hover:shadow-2xl transition'>
          <a href="https://www.apple.com/app-store/">
          <img className='' src="/Icons/Map_Icons/AppStore.svg" alt="AppStore_button" />
          </a>
        </button>

        <button className='h-10 cursor-pointer  hover:scale-105 hover:shadow-2xl transition'>
          <a href="https://play.google.com/store/apps/details?id=com.foodpicasso.ninjasushi&hl=en">
          <img className='' src="/Icons/Map_Icons/GooglePlay.svg" alt="GooglePlay_button" />
          </a>
        </button>
      </div>

      <p className='text-[#9E9E9E]'>© Ninja Sushi. All rights reserved.</p>
    </div>


    <div className="flex flex-col gap-5">
    <p className='text-[#686870] text-[14px]'>Навигация:</p>


    <div className='flex flex-col gap-3'>
      <NavLink to="/" className=" hover:text-orange-500 hover:scale-103 transition hover:shadow-2xl">Главная</NavLink>
      <NavLink to="/" className=" hover:text-orange-500 hover:scale-103 transition hover:shadow-2xl">Меню</NavLink>
      <NavLink to="/delivery" className=" hover:text-orange-500 hover:scale-103 transition hover:shadow-2xl">Доставка</NavLink>
      <NavLink to="/about" className=" hover:text-orange-500 hover:scale-103 transition hover:shadow-2xl">Вакансии</NavLink>
      <NavLink to="/news" className=" hover:text-orange-500 hover:scale-103 transition hover:shadow-2xl">Новости</NavLink>
    </div>
  
    </div>

    <div className="flex flex-col gap-5">
      <p className='text-[#686870] text-[14px]'>Оформить заказ:</p>
      <ul className='flex flex-col gap-3'>
       <a href="tel: +38 (067) 436 61 27">
        <li className=' hover:text-blue-500 hover:scale-103 transition hover:shadow-2xl'>+38 (067) 436 61 27</li>
        </a> 
        <a href="tel: +38 (066) 031 76 30"><li className=' hover:text-blue-500 hover:scale-103 transition hover:shadow-2xl'>+38 (066) 031 76 30</li></a>
        <a href="tel: +38 (093) 924 98 28"><li className=' hover:text-blue-500 hover:scale-103 transition hover:shadow-2xl'>+38 (093) 924 98 28</li></a>
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
      <a href="https://www.facebook.com/ninjasushi.warszawa">
      <img 
      src={img} 
      alt="Facebook" 
      className='cursor-pointer hover:scale-135 hover:shadow-2xl transition'
      onMouseEnter={() => {setImg("/Icons/Footer_Icons/FacebookBlue.svg")}}
      onMouseLeave={() => {setImg("/Icons/Footer_Icons/Facebook.svg")}}
      />
      </a>
    </button>

    <button>
      <a href="https://www.instagram.com/ninjasushi.pl/">
      <img src={inst}
      className='cursor-pointer hover:scale-135 hover:shadow-2xl transition'
      alt="Instagram" 
      onMouseEnter={() => {setInst("/Icons/Footer_Icons/InstagramColor.svg")}}
      onMouseLeave={() => {setInst("/Icons/Footer_Icons/Instagram.svg")}}/>
      </a>
    </button>
   </div>

    <a href="https://t.me/ninjasushi">
   <button className='flex p-5 gap-2 items-center bg-[#F5F5F7] rounded-2xl cursor-pointer hover:scale-110 hover:shadow-2xl hover:bg-yellow-200 transition'>
    <img src="/Icons/Footer_Icons/Telegram.svg" alt="Telegram" />
    <p className='text-[#039BE5] text-2xl'>Техподдержка</p>
   </button>
    </a>
    </div>

    </div>

    <div className="mt-10 flex flex-col gap-5">
      
      <p className='text-6xl font-bold'>#NinjaSushi</p>
      <p className='text-[#686870] text-[14px] w-50'>Ninja Sushi в фотографиях наших клиентов</p>
      <a className="cursor-pointer" href="https://www.instagram.com/explore/search/keyword/?q=%23ninjasushi">
        <button className='text-[#00CC2D] p-5 rounded-[10px] bg-[#F5F5F7] hover:scale-110 hover:shadow-2xl hover:bg-purple-400 hover:text-white cursor-pointer transition'>Перейти в instagram</button>
      </a>
    </div>

    </div>

    <div className="flex gap-300 items-center m-10 footer-bottom">
     
      
     <NavLink to="/contract">Политика конфиденциальности</NavLink>

      <div className="payment flex gap-5 payment">
      <a href="https://www.mastercard.com/us/en.html" className='hover:scale-150 transition'>
        <img src="Icons/Footer_Icons/MasterCard.svg" alt="MasterCard" />
      </a>

      <a href="https://usa.visa.com/" className='hover:scale-150 transition'>
        <img src="/Icons/Footer_Icons/Visa.svg" alt="Visa" />
      </a>

      <a href="https://privatbank.ua/" className='hover:scale-150 transition'>
        <img src="Icons/Footer_Icons/PB.svg" alt="PB" />
      </a>
      </div>

    </div>
  </div>
    </>
  )
}

export default Footer