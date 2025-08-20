import React from 'react'

const Header = () => {
  return (
    <>
    <div className="flex items-center justify-center">
      
      <div className="bg-white p-6 m-6 rounded-2xl ">
        <div className="flex gap-9 items-center justify-center">
         <a href="">
        <img src="../../../public/Header_Icons/Rolls.svg" alt="" />
      </a>
      
      <a href="">
      <img src="../../../public/Header_Icons/Sushi.svg" alt="" />
      
      </a>
      <a href="">
        <img src="../../../public/Header_Icons/Sets.svg" alt="" />
       
      </a>
      <a href="">
        <img src="../../../public/Header_Icons/Bouls.svg" alt="" />
        
      </a>
      <a href="">
      <img src="../../../public/Header_Icons/Baverages.svg" alt="" />
      
      </a>
      <a href="">
      <img src="../../../public/Header_Icons/Sauces.svg" alt="" />
      
      </a>
      <a href="">
      <img src="../../../public/Header_Icons/Unknown.svg" alt="" />
     
      </a>
      <a href="">
      <img src="../../../public/Header_Icons/Unknown.svg" alt="" />
      
      </a>
        </div>
     

      <div className="flex gap-6">
      <p>Роллы</p>
      <p>Суши</p>
      <p>Сеты</p>
      <p>Боулы</p>
      <p>Напитки</p>
      <p>Соусы</p>
      <p>Неизвестно</p>
      <p>Неизвестно</p> 
      </div>
        
      </div>
        
        
        
        
    </div>
    </>
  )
}

export default Header