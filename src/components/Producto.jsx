import React from "react";
import "../styles/Components/Producto.css";
import logox from "../assets/logox.png"; 

const Producto = ({ imagen, nombre, precio, stock }) => {
  return (
    <div className="producto-card">
      <div className="producto-imagen">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="producto-info">
        <h3 className="producto-nombre">{nombre}</h3>
        <p className="producto-precio">${precio}</p>
        <p className={`producto-stock ${stock > 0 ? "disponible" : "agotado"}`}>
          {stock > 0 ? `Stock: ${stock}` : "Agotado"}
        </p>
      </div>
    </div>
  );
};


const ProductoTest = () => {
  return (
    <div style={{ padding: "2rem", display: "flex", gap: "20px" }}>
      <Producto imagen={logox} nombre="Producto en stock" precio={19990} stock={12} />
      <Producto imagen={logox} nombre="Producto agotado" precio={14990} stock={0} />
    </div>
  );
};

export default ProductoTest; 
