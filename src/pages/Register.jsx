import React from "react";
import "../styles/Pages/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logox.png";

const Registro = () => {
  return (
    <div className="registro-container">
      <div className="registro-box">
        {/* Logo */}
        <div className="registro-logo">
          <img src={logo} alt="Logo" />
        </div>

        <h2>Crear Cuenta</h2>

        <form className="registro-form">
          <label htmlFor="nombre">Nombre Completo</label>
          <input type="text" id="nombre" placeholder="Juan Pérez" />

          <label htmlFor="rut">RUT</label>
          <input type="text" id="rut" placeholder="12.345.678-9" />

          <label htmlFor="email">Correo</label>
          <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />

          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" placeholder="+56 9 1234 5678" />

          <label htmlFor="region">Región</label>
          <input type="text" id="region" placeholder="Metropolitana" />

          <label htmlFor="ciudad">Comuna / Ciudad</label>
          <input type="text" id="ciudad" placeholder="Santiago" />  

          <label htmlFor="direccion">Dirección</label>
          <input type="text" id="direccion" placeholder="Calle, Número, Departamento" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="********" />
          
          <label htmlFor="password">Repetir contraseña</label>
          <input type="password" id="password" placeholder="********" />

          <button type="submit" className="registro-button">
            Registrarse
          </button>
        </form>

        <p className="login-text">
          ¿Ya tienes cuenta? <span className="login-link">Iniciar Sesión</span>
        </p>

        <div className="social-login">
          <button className="facebook-button">
            <FontAwesomeIcon icon={faFacebookF} /> Registrarse con Facebook
          </button>
          <button className="google-button">
            <FontAwesomeIcon icon={faGoogle} /> Registrarse con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
