import React, { useState } from "react";
import "../styles/Pages/PagarCarrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import logox from "../assets/logox.png"; // Imagen de ejemplo

const CarritoVentana = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 24990, imagen: logox },
    { id: 2, nombre: "Producto 2", precio: 15990, imagen: logox },
    { id: 3, nombre: "Producto 3", precio: 34990, imagen: logox },
  ]);

  const handleEliminar = (id) => {
    setProductos(productos.filter((prod) => prod.id !== id));
  };

  const total = productos.reduce((acc, prod) => acc + prod.precio, 0);

  const handleIrAPago = () => {
    alert("Ir a pagar...");
  };

  return (
    <div className="carrito-ventana">
      <h3>Mi Carrito</h3>

      <div className="productos-lista">
        {productos.map((prod) => (
          <div key={prod.id} className="producto-card-carrito">
            <img src={prod.imagen} alt={prod.nombre} className="producto-thumbnail" />
            <div className="producto-info">
              <span className="producto-nombre">{prod.nombre}</span>
              <span className="producto-precio">${prod.precio}</span>
            </div>
            <button className="producto-eliminar" onClick={() => handleEliminar(prod.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>

      <div className="total-carrito">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      <button className="boton-pagar" onClick={handleIrAPago}>
        Ir a Pagar
      </button>
    </div>
  );
};

export default CarritoVentana;
