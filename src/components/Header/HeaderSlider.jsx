import React from 'react'
import './Header.css'
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import { NavLink } from 'react-router';

const HeaderSlider = () => {
    const slideImages = [
    {
      icon: '../../../public/Icons/Header_Icons/Logo1.png', id: 1
    },
    {
      icon: '../../../public/Icons/Header_Icons/Logo2.jpeg', id: 2
    },
    {
      icon: '../../../public/Icons/Header_Icons/Logo3.jpeg', id: 3
    },
  ]

  return (
    <>
     <div className="header_title">

      <div className="header_text">
        <h1 className='text-6xl font-bold w-2xl pl-9'>Ninja Sushi <br />в Киеве! Пока только на левом  <br />берегу</h1>
        <p className='pl-9 p-5 text-2xl text-[#686870]'>Доставку делаем с 10:00 до 19:30</p>
        <div className="pl-9">
        <NavLink to="/news">
          <button className='w-80 p-3 mt-3 text-white rounded-2xl bg-[#00CC2D]'>Перейти к новости</button>
        </NavLink> 
        </div>
      </div> 
    
      <div className="header_slide">
        <div className="w-[800px] overflow-hidden slide h-150">
        <Slide duration={3000} transitionDuration={500} autoplay={true} infinite={true} arrows={false} indicators={false}>
         {slideImages.map((slide)=> (
           <div key={slide.id}>
              <div key={slide.id} className='w-full h-full flex justify-center items-center'>
                <img src={slide.icon} alt="" className='w-full h-full object-cover'/>
              </div>
            </div>
          ))} 
        </Slide>
        </div>
      </div>
    
     
    </div>
    </>
  )
}

export default HeaderSlider