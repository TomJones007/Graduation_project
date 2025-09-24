import Modal from "../Modal/Modal";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { name: "Главная", path: "/" },
  { name: "Доставка", path: "/delivery" },
  { name: "О нас", path: "/about" },
  { name: "Новости", path: "/news" },
];

const MobileMenu = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose} mobileMode="sheet" labelledBy="menu-title">
      <div className="px-5 py-4 border-b rounded-t-2xl bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h2 id="menu-title" className="text-2xl font-bold">Меню</h2>
          <button onClick={onClose} className="p-2 rounded-lg bg-[#F5F5F7] hover:bg-gray-200 cursor-pointer">✕</button>
        </div>
      </div>

      <div className="px-5 py-4 space-y-3">
        {children /* сюда можно вставить ваш MobileFoodsMenu при желании */}
        <div className="grid grid-cols-2 gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `text-[14px] bg-[#F5F5F7] text-[#1D1D1F] px-4 py-3 rounded-[12px] text-center ${
                  isActive ? "outline outline-1 outline-orange-400" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <Link to="tel:+380674366127" className="block">
          <div className="bg-[#F5F5F7] rounded-[12px] p-4 text-center">
            <p className="text-[#686870] text-[14px]">Оформить заказ: +38 (067) 436 61 27</p>
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default MobileMenu;
