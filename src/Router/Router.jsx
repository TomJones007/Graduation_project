import React from 'react'
import About from '../Pages/AboutUs/About'
import Delivery from '../Pages/Delivery/Delivery'
import MainPage from '../Pages/MainPage/MainPage'
import Account from '../Pages/PersonalAccount/Account'
import { Link, Route } from 'react-router-dom'
import Contract from '../Pages/Contract/Contract'
import Rolls from '../Pages/MainPage/Rolls/Rolls'
import Sushi from '../Pages/MainPage/Sushi/Sushi'
import Sets from '../Pages/MainPage/Sets/Sets'
import Bouls from '../Pages/MainPage/Bouls/Bouls'
import Beverages from '../Pages/MainPage/Beverages/Beverages'
import Sauces from '../Pages/MainPage/Sauces/Sauces'
import Snacks from '../Pages/MainPage/Snacks/Snacks'
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
        "href": '/unknown',
        "component": <Unknown/>
    },
  
]

export const FoodTypes = [
    {
        "id": 1,
        "name": "Роллы",
        "icon": "",
        "href": '/rolls',
        "component": <Rolls/>
    },
    {
        "id": 2,
        "name": "Суши",
        "icon": "",
        "href": '/sushi',
        "component": <Sushi/>
    },
    {
        "id": 3,
        "name": "Сеты",
        "icon": "",
        "href": '/sets',
        "component": <Sets/>
    },
    {
        "id": 4,
        "name": "Боулы",
        "icon": "",
        "href": '/bouls',
        "component": <Bouls />
    },
    {
        "id": 5,
        "name": "Напитки",
        "icon": "",
        "href": '/beverages',
        "component": <Beverages/>
    },
    {
        "id": 6,
        "name": "Соусы",
        "icon": "",
        "href": '/sauces',
        "component": <Sauces/>
    },
    {
        "id": 7,
        "name": "Неизв...",
        "icon": "",
        "href": '/unknown',
        "component": <Unknown />
    },
    {
        "id": 8,
        "name": "Закуски",
        "icon": "",
        "href": '/snacks',
        "component": <Snacks/>
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