import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const BrandDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Закрытие по клику вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex gap-3 items-center" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src="/Icons/Navbar_Icons/Logo.svg" alt="logo" />
        <img
          src="/Icons/Navbar_Icons/Arrow-down.svg"
          alt="arrow"
          className={`p-3 bg-[#F5F5F7] rounded-lg transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-16 bg-white rounded-2xl shadow-lg p-3 flex border-2 gap-3">
          <Link to="/" className="hover:scale-105 transition">
            <img src="/Icons/Modals_Icons/NinjaSushi.svg" alt="Sushi" className="w-30 h-20 border-2" />
          </Link>

          <Link to="/wok" className="hover:scale-105 transition">
            <img src="/Icons/Modals_Icons/NinjaWok.svg" alt="Wok" className="w-40 h-20 border-2" />
          </Link>

          <Link to="/pizza" className="hover:scale-105 transition">
            <img src="/Icons/Modals_Icons/NinjaPizza.svg" alt="Pizza" className="w-40 h-20 border-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrandDropdown;
