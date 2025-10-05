import React, { useState } from "react";
import logo from "../assets/Logo.png";
import "../styles/Components/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        {/* Logo vacío por ahora */}
        <div className="logo"></div>

        {/* Buscador */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar..."
            className="search-input"
          />
          <button className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Botón sidebar */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      {/* Overlay oscuro */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar derecho */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <ul>
          {/* Icono de usuario dentro de la sidebar */}
          <li>DELANTALES</li>
          <li>BOLSOS</li>
          <li>
            <FontAwesomeIcon icon={faUser} /> DETALLES CONTACTO
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
