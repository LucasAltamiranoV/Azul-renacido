import React from "react";
import "../styles/Pages/DetalleProducto.css";
import logox from "../assets/logox.png"; // Imagen de prueba

const DetalleProducto = ({ producto }) => {
  const prod = producto || {
    nombre: "Producto de prueba",
    stock: 15,
    precio: 24990,
    descripcion: "Este es un producto de prueba para mostrar el detalle completo.",
    imagen: logox,
  };

  const handleAgregarCarrito = () => {
    alert(`${prod.nombre} añadido al carrito 🛒`);
  };

  return (
    <div className="detalle-container">
      <div className="detalle-imagen">
        <img src={prod.imagen} alt={prod.nombre} />
      </div>

      <div className="detalle-info">
        <div className="detalle-card">
          <h2 className="detalle-nombre">{prod.nombre}</h2>
        </div>

        <div className="detalle-card">
          <p className={`detalle-stock ${prod.stock > 0 ? "disponible" : "agotado"}`}>
            {prod.stock > 0 ? `Stock: ${prod.stock}` : "Agotado"}
          </p>
        </div>

        <div className="detalle-card">
          <p className="detalle-precio">${prod.precio}</p>
        </div>

        <div className="detalle-card">
          <p className="detalle-descripcion">{prod.descripcion}</p>
        </div>

        <div className="detalle-card">
          <button
            className="detalle-btn"
            onClick={handleAgregarCarrito}
            disabled={prod.stock === 0}
          >
            {prod.stock > 0 ? "Añadir al carrito 🛒" : "Agotado"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
