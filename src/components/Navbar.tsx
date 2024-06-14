import React from 'react';
import logo from '../assets/logo.png';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  return (
    <nav className="bg-green-moss flex justify-between items-center p-6 fixed top-0 w-full z-10">
      <div className="flex items-center">
        <img src={logo} alt="Studio Cobó" className="h-16 mr-8" />
      </div>
      <ul className="flex space-x-6 list-none">
        <li className={`nav-item ${activeSection === "home" ? "text-black-400" : "text-white"}`}>
          <a href="#home" className="hover:text-gray-300 font-bebas-neue text-xl">Início</a>
        </li>
        <li className={`nav-item ${activeSection === "projects" ? "text-black-400" : "text-white"}`}>
          <a href="#projects" className="hover:text-gray-300 font-bebas-neue text-xl">Projetos</a>
        </li>
        <li className={`nav-item ${activeSection === "about" ? "text-black-400" : "text-white"}`}>
          <a href="#about" className="hover:text-gray-300 font-bebas-neue text-xl">Sobre</a>
        </li>
        <li className={`nav-item ${activeSection === "contact" ? "text-black-400" : "text-white"}`}>
          <a href="#contact" className="hover:text-gray-300 font-bebas-neue text-xl">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;