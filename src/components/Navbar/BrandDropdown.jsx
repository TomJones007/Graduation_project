import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const BrandDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = [
    { to: "/", src: "/Icons/Modals_Icons/NinjaSushi.svg", alt: "Sushi" },
    { to: "/wok", src: "/Icons/Modals_Icons/NinjaWok.svg", alt: "Wok" },
    { to: "/pizza", src: "/Icons/Modals_Icons/NinjaPizza.svg", alt: "Pizza" },
  ];

  return (
    <div className="relative flex gap-3 items-center" ref={dropdownRef}>
      <button onClick={() => setIsOpen((v) => !v)} className="flex items-center gap-2 cursor-pointer">
        <img src="/Icons/Navbar_Icons/Logo.svg" alt="logo" />
        <img
          src="/Icons/Navbar_Icons/Arrow-down.svg"
          alt="arrow"
          className={`p-3 bg-[#F5F5F7] rounded-lg transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <div
          className="
            absolute top-16 left-0 sm:left-auto sm:right-0
            bg-white rounded-2xl shadow-lg p-4
            grid grid-cols-3 gap-3
            w-screen max-w-xs sm:max-w-none sm:w-auto
          "
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center justify-center rounded-xl p-3 transition hover:scale-250
                 ${isActive ? "bg-gray-100" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              <img src={item.src} alt={item.alt} className="object-contain" />
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandDropdown;
