
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importamos el Router
import Navbar from "./components/Navbar";
import Register from "./components/Register"; // Importante para hitos futuros
import Login from "./components/Login"; // Importante para hitos futuros
import Home from "./pages/Home"; //Pagina principal
import Cart from "./components/Cart"; // Importamos Cart
import Footer from "./components/Footer";

function App() {
  return (
    <Router> {/* Aquí envolvemos toda la app con el Router */}
      <Navbar /> {/*Barra de navegación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} /> {/* Nueva ruta para el carrito */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
