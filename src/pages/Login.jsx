import React from "react";
import "../styles/Pages/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logox.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>

        <h2>Iniciar Sesión</h2>

        <form className="login-form">
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="********" />

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <p className="register-text">
          ¿No tienes cuenta? <span className="register-link">Registrarte</span>
        </p>

        <div className="social-login">
          <button className="facebook-button">
            <FontAwesomeIcon icon={faFacebookF} /> Entrar con Facebook
          </button>
          <button className="google-button">
            <FontAwesomeIcon icon={faGoogle} /> Entrar con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
