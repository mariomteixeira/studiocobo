import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-moss flex justify-end items-center p-6 fixed top-0 w-full z-10">
      <ul className="flex space-x-6 list-none">
        <li className="nav-item"><a href="#home" className="text-white hover:text-gray-300">Início</a></li>
        <li className="nav-item"><a href="#home" className="text-white hover:text-gray-300">Projetos</a></li>
        <li className="nav-item"><a href="#home" className="text-white hover:text-gray-300">Sobre</a></li>
        <li className="nav-item"><a href="#home" className="text-white hover:text-gray-300">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;