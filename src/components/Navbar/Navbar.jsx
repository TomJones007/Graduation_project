import { Link, NavLink } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import BrandDropdown from "./BrandDropdown";
import NotificationsModal from "./NotificationsModal";
import LangCityModal from "./LangCityModal";
import AuthModal from "./AuthModal";
import CartModal from "./CartModal";
import MobileMenu from "./MobileMenu";
import { useSelector } from "react-redux";
import "./Navbar.css";

export const Navbar = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation();
  const favourites = useSelector((s) => s.favourites ?? []);
  const cart = useSelector((s) => s.cart?.items ?? s.cart ?? []);

  const ChangeLang = (lng) => i18next.changeLanguage(lng);

  const cartQty = Array.isArray(cart) ? cart.reduce((a, v) => a + (v.quantity || 1), 0) : 0;

   return (
    <>
      <div className="navbar flex m-3 sm:m-5 p-3 sm:p-5 items-center justify-between sm:justify-around bg-white rounded-2xl">
        <BrandDropdown />

        {/* center */}
        <div className="hidden lg:flex gap-6 items-center menu-desktop">
          {/* Flag / Lang trigger */}
          <button onClick={() => setLangOpen(true)} className="flex items-center gap-2 px-3 py-2 bg-[#F5F5F7] rounded-xl cursor-pointer">
            <img className="w-6" src="/Icons/Navbar_Icons/Russia-flag-icon.svg" alt="RU" />
            <span className="text-sm">RU</span>
          </button>

          <ul className="flex gap-6">
            <Link to="/" className="transition hover:text-orange-500 hover:scale-115">{t("Main") || "Главная"}</Link>
            <Link to="/delivery" className="transition hover:text-orange-500 hover:scale-115">{t("Delivery") || "Доставка"}</Link>
            <NavLink to="/about" className="transition hover:text-orange-500 hover:scale-115">{t("About Us") || "О нас"}</NavLink>
            <NavLink to="/news" className="transition hover:text-orange-500 hover:scale-115">{t("News") || "Новости"}</NavLink>
          </ul>

          <div className="hidden md:flex gap-3 items-center">
            <img src="/Icons/Navbar_Icons/Telephone.svg" alt="phone" />
            <a href="tel:+380976993438" className="transition hover:text-orange-500 hover:scale-105">
              +38 097 699 34 38
            </a>
          </div>
        </div>

        {/* right actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* burger mobile */}
          <button className="lg:hidden icon-btn w-11 h-11 rounded-2xl cursor-pointer" onClick={() => setMenuOpen(true)} aria-label="Открыть меню">
            <img src="/Icons/Navbar_Icons/Menu.svg" alt="menu" />
          </button>

          {/* notifications */}
          <button className="relative icon-btn w-11 h-11 rounded-2xl cursor-pointer" onClick={() => setNotifOpen(true)} aria-label="Уведомления">
            <img src="/Icons/Navbar_Icons/Bell.svg" alt="bell" />
            {/* пример бейджа */}
            <span className="nav-badge">2</span>
          </button>

          {/* favourites */}
          <NavLink to="/favourites" className="relative icon-btn w-11 h-11 rounded-2xl cursor-pointer grid place-items-center">
            <img src="/Icons/Navbar_Icons/Heart.svg" alt="heart" className="h-6" />
            {favourites.length > 0 && <span className="nav-badge">{favourites.length}</span>}
          </NavLink>

          {/* account -> auth modal */}
          <button onClick={() => setAuthOpen(true)} className="icon-btn w-11 h-11 rounded-2xl cursor-pointer">
            <img src="/Icons/Navbar_Icons/Account.svg" alt="account" />
          </button>

          {/* cart */}
          <button onClick={() => setCartOpen(true)} className="relative icon-btn rounded-2xl cursor-pointer flex items-center gap-2 px-4 h-11">
            <span>Корзина</span>
            <img src="/Icons/Navbar_Icons/Basket.svg" alt="basket" />
            {cartQty > 0 && <span className="nav-badge">{cartQty}</span>}
          </button>
        </div>
      </div>

      {/* модалки */}
      <NotificationsModal open={notifOpen} onClose={() => setNotifOpen(false)} />
      <LangCityModal
        open={langOpen}
        onClose={() => setLangOpen(false)}
        onChangeLang={(lng) => ChangeLang(lng.toLowerCase())}
      />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
