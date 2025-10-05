import React, { useState } from "react";
import Producto from "../components/Producto";
import "../styles/Pages/Home.css";

const productos = [
  { id: 1, nombre: "Producto 1", precio: 15000, stock: 5, imagen: "/assets/producto1.png" },
  { id: 2, nombre: "Producto 2", precio: 25000, stock: 3, imagen: "/assets/producto2.png" },
  { id: 3, nombre: "Producto 3", precio: 35000, stock: 0, imagen: "/assets/producto3.png" },
  { id: 4, nombre: "Producto 4", precio: 20000, stock: 10, imagen: "/assets/producto4.png" },
  { id: 5, nombre: "Producto 5", precio: 45000, stock: 2, imagen: "/assets/producto5.png" },
  { id: 6, nombre: "Producto 6", precio: 5000, stock: 7, imagen: "/assets/producto6.png" },
];

const Home = () => {
  const [precioMax, setPrecioMax] = useState(100000);

  const productosFiltrados = productos.filter(
    (p) => p.precio <= precioMax
  );

  return (
    <div className="home-container">
      <h2>Productos</h2>

      {/* Contenedor del filtro */}
      <div className="filtro-container">
        <label htmlFor="precioRange">Filtrar por precio: ${precioMax}</label>
        <input
          type="range"
          id="precioRange"
          min="0"
          max="100000"
          step="1000"
          value={precioMax}
          onChange={(e) => setPrecioMax(e.target.value)}
        />
        <div className="range-labels">
          <span>$0</span>
          <span>$100.000</span>
        </div>
      </div>

      {/* Lista de productos usando flexbox */}
      <div className="productos-grid">
        {productosFiltrados.map((producto) => (
          <Producto
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            stock={producto.stock}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
