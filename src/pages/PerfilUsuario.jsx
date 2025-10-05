import React, { useState } from "react";
import "../styles/Pages/PerfilUsuario.css";

const Perfil = () => {
  const [formData, setFormData] = useState({
    correo: "usuario@ejemplo.com",
    direccion: "Calle Falsa 123",
    region: "Valparaíso",
  });

  const usuario = {
    nombre: "Lucas Altamirano",
    rut: "12.345.678-9",
    telefono: "+56 9 1234 5678",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Datos actualizados correctamente ✅");
  };

  return (
    <div className="perfil-container">
      <h2>Mi Perfil</h2>
      <form className="perfil-form" onSubmit={handleSubmit}>

        {/* Campos solo lectura */}
        <label>
          Nombre completo
          <input type="text" value={usuario.nombre} readOnly />
        </label>

        <label>
          RUT
          <input type="text" value={usuario.rut} readOnly />
        </label>

        <label>
          Teléfono
          <input type="text" value={usuario.telefono} readOnly />
        </label>

        {/* Campos editables */}
        <label>
          Correo electrónico
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Dirección
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Región
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          >
            <option value="Valparaíso">Valparaíso</option>
            <option value="Metropolitana">Metropolitana</option>
            <option value="Biobío">Biobío</option>
            <option value="Coquimbo">Coquimbo</option>
          </select>
        </label>

        <button type="submit" className="perfil-btn">
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default Perfil;
