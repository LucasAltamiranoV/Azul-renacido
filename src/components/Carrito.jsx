import React from "react";
import "../styles/Components/Carrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Carrito = () => {
  return (
    <div className="carrito-container">
      <button className="carrito-button">
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Carrito;
