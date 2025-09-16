import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import HeaderSlider from './HeaderSlider'

const Header = () => {
   const [hoveredIndex, setHoveredIndex] = useState(null);
   
const FoodTypes = [
    {title: 'Роллы', icon: '/Icons/Header_Icons/Rolls.svg', path: '/rolls', activeIcon: "/Icons/Header_Icons/Active/RollsActive.svg"},
    {title: 'Суши', icon: '/Icons/Header_Icons/Sushi.svg', path: '/sushi', activeIcon: "/Icons/Header_Icons/Active/SushiActive.svg"},
    {title: 'Сеты', icon: '/Icons/Header_Icons/Sets.svg', path: '/sets', activeIcon: "/Icons/Header_Icons/Active/SetsActive.svg"},
    {title: 'Боулы', icon: '/Icons/Header_Icons/Bouls.svg', path: '/bouls', activeIcon: "/Icons/Header_Icons/Active/BoulsActive.svg"}, 
    {title: 'Напитки', icon: '/Icons/Header_Icons/Baverages.svg', path: '/beverages', activeIcon: "/Icons/Header_Icons/Active/BaveragesActive.svg"},
    {title: 'Соусы', icon: '/Icons/Header_Icons/Sauces.svg', path: '/sauces', activeIcon: "/Icons/Header_Icons/Active/SaucesActive.svg"},
    {title: 'Неиз...', icon: '/Icons/Header_Icons/Unknown.svg', path: '/unknown', activeIcon: "/Icons/Header_Icons/Active/UnknownActive.svg"},
    {title: 'Неиз...', icon: '/Icons/Header_Icons/Unknown.svg', path: '/unknown', activeIcon: "/Icons/Header_Icons/Active/UnknownActive.svg"}
  ]

  return (
    <>
    <div className='header_container'>
    <div className="foodtypes_wrapper">
      {FoodTypes.map((foodType, index) => (
       
        
        <NavLink 
        to={foodType.path} 
        key={index} 
        className={({isActive}) => isActive ? 'foodtype_link active' : 'foodtype_link'}
         onMouseEnter={() => setHoveredIndex(index)}
         onMouseLeave={() => setHoveredIndex(null)}
        >

        {({ isActive }) => {
                const showActiveIcon = isActive || hoveredIndex === index;
                return (
                  <>
                    <div className="icon_wrapper">
                      <img
                        src={showActiveIcon ? foodType.activeIcon : foodType.icon}
                        alt={foodType.title}
                        className="icon"
                      />
                    </div>
                    <span className="title">{foodType.title}</span>
                  </>
                );
              }}

        </NavLink>
      ))}
    </div>
    </div>
    
    </>
  )
}


export default Header