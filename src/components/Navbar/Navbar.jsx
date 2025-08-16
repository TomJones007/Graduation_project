
const Navbar = () => {
  return (
    <>
     <div className="flex p-5 items-center justify-around bg-white border-2 rounded-2xl">

    <div className="flex gap-5 bg-white">
        <img src="../../../public/Navbar_Icons/Logo.svg" alt="logo" />
    

        <img className="p-5 bg-[#F5F5F7]" src="../../../public/Navbar_Icons/Arrow-down.svg" alt="arrow_down" />
    </div>

    <div className="flex gap-6 items-center">
        <div className="flex gap-1">
       <img className="w-6" src="../../../public/Navbar_Icons/Russia-flag-icon.svg" alt="language_flag" />
       <img className="w-6" src="../../../public/Navbar_Icons/United-kingdom-flag-icon.svg" alt="language_flag" />
        </div>
        
       <select name="Langauges" id="">
            <option value="">Ru</option>
            <option value="">Eng</option>
        </select> 
        

        <ul className="flex gap-9 m-5">
            <li>Главная</li>
            <li>Доставка</li>
            <li>О нас</li>
            <li>Новости</li>
        </ul>
        <div className="flex gap-3">
        <img src="../../../public/Navbar_Icons/Telephone.svg" alt="phone" />
        <p>+38 097 699 34 38</p>
        </div>
    </div>

    <div className="flex gap-4">
        <button className="p-3 rounded-2xl border-gray-400 border-1 ">
            <img src="../../../public/Navbar_Icons/Bell.svg" alt="bell" />
        </button>

        <button className="p-3 rounded-2xl border-gray-400 border-1 " >
            <img src="../../../public/Navbar_Icons/Heart.svg" alt="heart" />
        </button>

        <button className="p-3 rounded-2xl border-gray-400 border-1 ">
            <img src="../../../public/Navbar_Icons/Account.svg" alt="account" />
            
            
        </button>

        <button className="flex gap-2 items-center p-3 pr-6 pl-6 rounded-2xl border-gray-400 border-1">
            <p>Корзина</p>
            <img src="../../../public/Navbar_Icons/Basket.svg" alt="basket" />
        </button>
    </div>
    
    </div>
    </>
  )
}

export default Navbar