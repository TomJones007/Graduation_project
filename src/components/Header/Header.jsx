import React from 'react'
import { NavLink } from 'react-router'
import './Header.css'

const FoodTypes = [
  {title: 'Роллы', icon: '../../../public/Header_Icons/Rolls.svg', path: '/rolls'},
  {title: 'Суши', icon: '../../../public/Header_Icons/Sushi.svg', path: '/sushi'},
  {title: 'Сеты', icon: '../../../public/Header_Icons/Sets.svg', path: '/sets'},
  {title: 'Боулы', icon: '../../../public/Header_Icons/Bouls.svg', path: '/bouls'},
  {title: 'Напитки', icon: '../../../public/Header_Icons/Baverages.svg', path: '/baverages'},
  {title: 'Соусы', icon: '../../../public/Header_Icons/Sauces.svg', path: '/sauces'},
  {title: 'Неиз...', icon: '../../../public/Header_Icons/Unknown.svg', path: '/unknown'},
  {title: 'Неиз...', icon: '../../../public/Header_Icons/Unknown.svg', path: '/unknown'}
]

const Header = () => {
  return (
    <div className='header_container'>
    <div className="foodtypes_wrapper">
      {FoodTypes.map((foodType, index) => {
        <NavLink to={foodType.path} key={index} className={({isActive}) => isActive ? 'foodtype_link active' : 'foodtype_link'}>

          <div className="icon_wrapper">
            <img src={foodType.icon} alt={foodType.title} className='icon' />
            
          </div>
          <span className='title'>{foodType.title}</span>

        </NavLink>
      })}
    </div>
    </div>
  )
}


export default Header