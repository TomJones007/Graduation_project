import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import BrandDropdown from "./BrandDropdown";
import NotificationsModal from "./NotificationsModal";
import "./Navbar.css"; // адаптивные @media

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const { t } = useTranslation();

  const favourites = useSelector((state) => state.favourites ?? []);
  const cart = useSelector((state) => state.cart ?? []);

  const ChangeLang = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <nav className="navbar bg-white m-3 p-4 rounded-2xl shadow-md">
      <div className="flex items-center justify-between">
        {/* Лого / Brand */}
        <div className="flex items-center gap-4">
          <BrandDropdown />
        </div>

        {/* NAV LINKS (desktop center) */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <ul className="flex gap-6">
            <Link to="/" className="hover:text-orange-500 transition">
              {t("Main")}
            </Link>
            <Link to="/delivery" className="hover:text-orange-500 transition">
              {t("Delivery")}
            </Link>
            <NavLink to="/about" className="hover:text-orange-500 transition">
              {t("About Us")}
            </NavLink>
            <NavLink to="/news" className="hover:text-orange-500 transition">
              {t("News")}
            </NavLink>
          </ul>
        </div>

        {/* Right side icons (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Flags */}
          <div className="flex gap-1 items-center">
            <img
              onClick={() => ChangeLang("ru")}
              className="w-6 cursor-pointer"
              src="/Icons/Navbar_Icons/Russia-flag-icon.svg"
              alt="Russian"
            />
            <img
              onClick={() => ChangeLang("en")}
              className="w-6 cursor-pointer"
              src="/Icons/Navbar_Icons/United-kingdom-flag-icon.svg"
              alt="English"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <img src="/Icons/Navbar_Icons/Telephone.svg" alt="phone" className="w-5" />
            <a href="tel:+380976993438" className="hover:text-orange-500 transition">
              +38 097 699 34 38
            </a>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotifOpen(true)}
              className="icon-btn p-3 rounded-2xl border border-gray-300 hover:bg-orange-500 transition"
              aria-label="notifications"
            >
              <img src="/Icons/Navbar_Icons/Bell.svg" alt="bell" className="w-5 h-5" />
            </button>
            {/* badge can be added if needed */}
          </div>

          {/* Favourites */}
          <NavLink to="/favourites" className="relative">
            <button className="icon-btn p-3 rounded-2xl border border-gray-300 hover:bg-orange-500 transition" aria-label="favourites">
              <img src="/Icons/Navbar_Icons/Heart.svg" alt="heart" className="w-5 h-5" />
            </button>
            {favourites.length > 0 && (
              <span className="nav-badge">{favourites.length}</span>
            )}
          </NavLink>

          {/* Account */}
          <NavLink to="/account">
            <button className="p-3 rounded-2xl border border-gray-300 hover:bg-orange-500 transition" aria-label="account">
              <img src="/Icons/Navbar_Icons/Account.svg" alt="account" className="w-5 h-5" />
            </button>
          </NavLink>

          {/* Basket */}
          <NavLink to="/basket" className="relative flex items-center gap-2 p-2">
            <p className="hidden lg:block">{t("Basket")}</p>
            <button className="p-3 rounded-2xl border border-gray-300 hover:bg-orange-500 transition" aria-label="basket">
              <img src="/Icons/Navbar_Icons/Basket.svg" alt="basket" className="w-5 h-5" />
            </button>
            {cart.length > 0 && (
              <span className="nav-badge">{cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}</span>
            )}
          </NavLink>
        </div>

        {/* Burger (mobile) */}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          className="md:hidden p-2 rounded"
          aria-label="menu"
        >
          <img src="/Icons/Navbar_Icons/Menu.svg" alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 p-4 bg-white rounded-2xl shadow-sm flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            <Link to="/" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100 transition">
              {t("Main")}
            </Link>
            <Link to="/delivery" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100 transition">
              {t("Delivery")}
            </Link>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100 transition">
              {t("About Us")}
            </NavLink>
            <NavLink to="/news" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100 transition">
              {t("News")}
            </NavLink>
          </ul>

          {/* Bottom row: flags, phone, icons (mobile) */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img onClick={() => { ChangeLang("ru"); setMenuOpen(false); }} className="w-7 cursor-pointer" src="/Icons/Navbar_Icons/Russia-flag-icon.svg" alt="ru" />
              <img onClick={() => { ChangeLang("en"); setMenuOpen(false); }} className="w-7 cursor-pointer" src="/Icons/Navbar_Icons/United-kingdom-flag-icon.svg" alt="en" />
            </div>

            <div className="flex items-center gap-2">
              <a href="tel:+380976993438" className="py-2 px-3 rounded hover:bg-gray-100 transition">+38 097 699 34 38</a>

              {/* Notifications (mobile) */}
              <button onClick={() => { setNotifOpen(true); setMenuOpen(false); }} className="icon-btn p-2 rounded">
                <img src="/Icons/Navbar_Icons/Bell.svg" alt="bell" className="w-5 h-5" />
              </button>

              {/* Favourites (mobile) */}
              <NavLink to="/favourites" onClick={() => setMenuOpen(false)} className="relative">
                <button className="icon-btn p-2 rounded">
                  <img src="/Icons/Navbar_Icons/Heart.svg" alt="favourites" className="w-5 h-5" />
                </button>
                {favourites.length > 0 && <span className="nav-badge">{favourites.length}</span>}
              </NavLink>

              {/* Account (mobile) */}
              <NavLink to="/account" onClick={() => setMenuOpen(false)}>
                <button className="p-2 rounded">
                  <img src="/Icons/Navbar_Icons/Account.svg" alt="account" className="w-5 h-5" />
                </button>
              </NavLink>

              {/* Basket (mobile) */}
              <NavLink to="/basket" onClick={() => setMenuOpen(false)} className="relative">
                <button className="p-2 rounded">
                  <img src="/Icons/Navbar_Icons/Basket.svg" alt="basket" className="w-5 h-5" />
                </button>
                {cart.length > 0 && <span className="nav-badge">{cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}</span>}
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Notifications modal (global) */}
      {notifOpen && <NotificationsModal onClose={() => setNotifOpen(false)} />}
    </nav>
  );
};

export default Navbar;
