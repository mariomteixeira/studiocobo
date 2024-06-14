import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Caso você ainda precise de algum estilo global

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id") as string;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <div className="main-content">
        <section id="home" className="section h-screen">Início</section>
        <section id="projects" className="section h-screen">Projetos</section>
        <section id="about" className="section h-screen">Sobre</section>
        <section id="contact" className="section h-screen">Contato</section>
      </div>
    </div>
  );
};

export default App;
