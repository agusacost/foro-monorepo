import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar__logo">MyUni</div>

      <nav className={`navbar__links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#explorar" onClick={toggleMenu}>Explorar</a>
        <a href="#acerca" onClick={toggleMenu}>Acerca</a>
        <a href="#qa" onClick={toggleMenu}>Q&A</a>
      </nav>

      <div className="navbar__auth">
        <button className="btn register">Registrarse</button>
        <button className="btn login">Ingresar</button>
      </div>

      <button className="navbar__toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Navbar;