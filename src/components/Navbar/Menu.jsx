// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import LanguageSwitcher from '../LanguageSwitcher';
// import MobileFoodsMenu from './MobileFoodsMenu';
// import { Link, NavLink } from 'react-router';

// const Menu = ({ onClose, isOpen }) => {


// const navItems = [
//   { name: "главная", path: "/" },
//   { name: "Доставка", path: "/delivery" },
//   { name: "О нас", path: "/about" },
//   { name: "Новости", path: "/news" },
// ];


//   return (
//     <div className="">

//     <AnimatePresence>
//       {isOpen && (
//         <div className="absolute h-[145vh] inset-0 z-50">
//           {/* Анимация фона */}
//           <motion.div
//             className="absolute inset-0 bg-black/40"
//             onClick={onClose}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           ></motion.div>

//           {/* Анимация панели меню */}
//           <motion.aside
//             className="absolute right-0 top-0 w-full sm:w-80 h-full bg-white p-5 shadow-lg"
//             initial={{ x: '100%' }} // начальное положение за пределами экрана
//             animate={{ x: 0 }}      // выезжает на экран
//             exit={{ x: '100%' }}    // уезжает обратно
//             transition={{ type: 'tween', duration: 0.4 }}
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold">Меню</h2>
//               <button
//                 onClick={onClose}
//                 aria-label="Закрыть"
//                 className="p-2 rounded-[8px] bg-gray-100 cursor-pointer"
//               >
//                 <img src="../../../icons/Крестик.svg" alt="Закрыть" />
//               </button>
//             </div>
//             <div className="">

//           <MobileFoodsMenu />
//             <Link to="/buscket">
//           <div className="flex justify-center">

//           <div className="mt-4 bg-[#F5F5F7] rounded-[12px] flex items-center px-14 py-4 gap-4 justify-center w-[325px]">
//          <img src="../../icons/Иконка.svg" alt="" />
//          <h3 className='text-[#1D1D1F] text-[14px] font-medium'>Повторить прошлый заказ</h3>
//           </div>
//           </div>
//             </Link>
//             <div className="flex  justify-center gap-3 mt-3">
//                  <Link to="/like">
//         <div className="  rounded-[12px] bg-[#F5F5F7] w-[155px] cursor-pointer flex items-center justify-center px-14 py-3.5 gap-3 ">
//           <img src="../../icons/heart.svg" alt="" />
//           <h3 className='text-[#1D1D1F] text-[14px] font-medium'>Избранное</h3>
//         </div>
//         </Link>
//          <Link to="/profile">
//         <div className=" rounded-[12px] bg-[#F5F5F7] w-[155px] flex items-center justify-center px-14 py-3.5 gap-3  cursor-pointer ">
//           <img src="../../icons/profile.svg" alt="" />
//             <h3 className='text-[#1D1D1F] text-[14px] font-medium'>Профиль</h3>
//         </div>
//        </Link>
//             </div>
//               <div className="flex flex-wrap gap-3 justify-center mt-3">
//                 {navItems.map((item, index) =>(
             
//                 <NavLink 
//                 key={item.path}
//                 to={item.path} 
//                 className={({ isActive }) =>
               
//                   `text-[14px] bg-[#F5F5F7] text-[#1D1D1F] px-12.5 py-4 w-[155px] rounded-[12px] ${isActive ? "text-amber-500": "text-gray-950"}
//                    ${index === navItems.length -2 ? 'px-13 w' : ''}
//                   `}>
//                     <h3>{item.name}</h3>
//                   </NavLink>
//                 ))}
//                </div>
//                <div className="flex justify-center mt-3">
//                 <div className="bg-[#F5F5F7] flex px-12.5 py-4 w-[320px] justify-center rounded-[12px]">


//                 <a className='flex gap-3' href="https://t.me/username" target="_blank" rel="noopener noreferrer">
                
//                      <img src="../../../icons/telegram2.svg" alt="" />
//                      <h3 className='text-[#039BE5] text-[14px] font-medium'>Поддержка</h3>
//                 </a>
//                 </div>
//                </div>
//                <div className="flex justify-center mt-3">
//                 <div className=" rounded-[12px] bg-[#F5F5F7] w-[320px] cursor-pointer flex flex-col items-center justify-center px-14 py-3.5 gap-3">
//                     <h3 className='text-[#686870] text-[14px]'>Оформить заказ:</h3>
//                      <a href="tel: +380674366127" className="text-gray-950 hover:underline hover:text-blue-800">
//       +38 (067) 436 61 27
//     </a>
//                      <a href="tel: +380660317630" className="text-gray-950 hover:underline hover:text-blue-800">
//      +38 (066) 031 76 30
//     </a>
//                      <a href="tel: +380939249828" className="text-gray-950 hover:underline hover:text-blue-800">
//       +38 (093) 924 98 28
//     </a>
//     <h3 className='text-[#9E9E9E] text-[14px] text-center'>Звоните нам с 9:00 до 21:00 без выходных</h3>
//                 </div>
//                </div>
//                <div className="flex justify-center">
//                    <div
//         className={`brand bg-[#F5F5F7] flex items-center justify-center  mt-3 gap-5 transition-all rounded-[12px] w-[320px] duration-300 ease-in-out overflow-hidden`}
//       >
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             `p-2 rounded-lg cursor-pointer transition ${
//               isActive ? "bg-white w-16 h-16" : "bg-[#F5F5F7]"
//             }`
//           }
//         >
//           <img src="/icons/NinjaSushi.svg" alt="Ninja Sushi" />
//         </NavLink>

//         <NavLink
//           to="/Wok"
//           className={({ isActive }) =>
//             `p-2 rounded-lg cursor-pointer transition ${
//               isActive ? "bg-white w-16 h-16" : "bg-[#F5F5F7]"
//             }`
//           }
//         >
//           <img src="/icons/NInjaWok.svg" alt="Ninja Wok" />
//         </NavLink>

//         <NavLink
//           to="/Pizza"
//           className={({ isActive }) =>
//             `p-2 rounded-lg cursor-pointer transition ${
//               isActive ? "bg-white w-16 h-16" : "bg-[#F5F5F7]"
//             }`
//           }
//         >
//           <img src="/icons/NInjaPizza.svg" alt="Ninja Pizza" />
//         </NavLink>
//       </div>
//                </div>
//             </div>
//           </motion.aside>
//         </div>
//       )}
//     </AnimatePresence>
//      </div>
//   );
// };

// export default Menu;
