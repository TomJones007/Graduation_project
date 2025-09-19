// import React, { useEffect } from 'react'
import { Link } from 'react-router'

const Unknown = () => {
  
  
  return (
    <>
    <div className=" p-15">
    <div className="flex flex-col bg-white rounded-2xl mx-15 justify-center pb-15 items-center gap-10">
      <img className='w-200' src="/Icons/Error_Icons/Error.svg" alt="NotFound" />
      <h1 className='text-center font-bold text-7xl'>Ошибка 404. <br /> Что-то пошло не так.</h1>
      <p className='text-[#686870] w-150 text-center text-3xl'>Страница, которую вы ищите, временно не доступна или ее еже нет</p>
      <Link to="/" className='w-150 bg-[#00CC2D] text-white text-4xl p-5 rounded-2xl text-center hover:scale-110 transition hover:shadow-2xl '>Вернуться на главную</Link>
    </div>
    </div>
    </>
  )
}

export default Unknown