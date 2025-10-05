import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Perfil from "./pages/PerfilUsuario";
import DetalleProducto from './pages/DetalleProducto';
import PagarCarrito from './pages/PagarCarrito';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
