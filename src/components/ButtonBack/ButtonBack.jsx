import { useNavigate } from 'react-router'

export const ButtonBack = () => {
    const navigateBack = useNavigate()
  return (
    <div>
  <button onClick={() => navigateBack(-1)} className='flex gap-1.5 items-center text-[#00CC2D] text-[12px] px-3 py-2 rounded-xl bg-white cursor-pointer shadow shadow-blue-400 hover:scale-112 transition-all'>
    <img src="/Icons/Header_Icons/GreenArrow.svg" alt="GreenArrow_Back" /> 
    Назад
  </button>
    </div>
  )
}

