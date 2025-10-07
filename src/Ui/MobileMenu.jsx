import React from 'react';
import { ImCross } from 'react-icons/im';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center tracking-all duration-300 gap-14 ease-in-out ${
        isMenuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <ImCross />
      </button>

      <nav className="flex flex-col gap-6 text-white text-lg">
        <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:underline">Home</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:underline">About</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:underline">Services</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:underline">Contact</a>
      </nav>
    </div>
  );
}
