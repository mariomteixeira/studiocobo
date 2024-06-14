import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  return (
    <nav className="bg-green-moss flex justify-end items-center p-6 fixed top-0 w-full z-10">
      <ul className="flex space-x-6 list-none">
        <li className={`nav-item ${activeSection === "home" ? "text-yellow-400" : "text-white"}`}>
          <a href="#home" className="hover:text-gray-300">Início</a>
        </li>
        <li className={`nav-item ${activeSection === "projects" ? "text-yellow-400" : "text-white"}`}>
          <a href="#projects" className="hover:text-gray-300">Projetos</a>
        </li>
        <li className={`nav-item ${activeSection === "about" ? "text-yellow-400" : "text-white"}`}>
          <a href="#about" className="hover:text-gray-300">Sobre</a>
        </li>
        <li className={`nav-item ${activeSection === "contact" ? "text-yellow-400" : "text-white"}`}>
          <a href="#contact" className="hover:text-gray-300">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
