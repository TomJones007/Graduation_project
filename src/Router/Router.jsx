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
import Pizza from '../../PIZZA/Pizza'
import Wok from '../../WOK/Wok'
import Basket from '../Pages/Basket/Basket'
import Favourites from '../Pages/Favourites/Favourites'
import News from '../Pages/News/News'

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
        "name": "Account",
        "icon": "",
        "href": '/account',
        "component": <Account/>
    },
    {
        "id": 5,
        "name": "Контракт",
        "icon": "",
        "href": '/contract',
        "component": <Contract/>
    },
    {
        "id": 6,
        "name": "Неизвестно",
        "icon": "",
        "href": '/unknown',
        "component": <Unknown/>
    },
    {
        "id": 7,
        "name": "Wok",
        "icon": "",
        "href": '/wok',
        "component": <Wok/>
    },
    {
        "id": 8,
        "name": "Pizza",
        "icon": "",
        "href": '/pizza',
        "component": <Pizza/>
    },
    {
        "id": 9,
        "name": "Корзина",
        "icon": "",
        "href": '/basket',
        "component": <Basket/>
    },
    {
        "id": 10,
        "name": "Избранные",
        "icon": "",
        "href": '/favourites',
        "component": <Favourites/>

    },
    {
        "id": 11,
        "name": "Новости",
        "icon": "",
        "href": '/news',
        "component": <News/>

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