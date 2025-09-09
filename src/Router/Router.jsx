import React from 'react'
import About from '../Pages/AboutUs/About'
import Delivery from '../Pages/Delivery/Delivery'
import MainPage from '../Pages/MainPage/MainPage'
import Account from '../Pages/PersonalAccount/Account'
import { Link, Route } from 'react-router-dom'
import Contract from '../Pages/Contract/Contract'
import Unknown from '../Pages/MainPage/Unknown/Unknown'

export const RouterPages = [
    {
        "id": 1,
        "name": "Главная",
        "icon": "",
        "href": '/',
        "component": <MainPage/>
    },

    {
        "id": 2,
        "name": "Доставка",
        "icon": "",
        "href": '/delivery',
        "component": <Delivery/>
    },

    {
        "id": 3,
        "name": "О нас",
        "icon": "",
        "href": '/about',
        "component": <About/>
    },

    {
        "id": 4,
        "name": "Basket",
        "icon": "",
        "href": '/account',
        "component": <Account/>
    },
    {
        "id": 5,
        "name": "Contract",
        "icon": "",
        "href": '/contract',
        "component": <Contract/>
    },
    {
        "id": 6,
        "name": "Unknown",
        "icon": "",
        "href": '/404',
        "component": <Unknown/>
    },
  
]

 
 export const Router = () => {
   return (
    RouterPages.map((el)=>(<Route path={el.href} element={el.component} key={el.id}/>))
   )
 }
 
export const makeNavbarItem = () => {
    return(
        RouterPages.map((el)=> (
            el.name.length == 0 ? null :  
        <li className="text-2xl" key={el.id}>
            
        <Link to={el.href}>
        <p className="">{el.name}</p>
        </Link>
        </li>
        ))
        
    )}