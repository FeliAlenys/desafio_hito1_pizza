
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importamos el Router
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; //Pagina principal
// import Register from "./components/Register"; // Importante para hitos futuros
// import Login from "./components/Login"; // Importante para hitos futuros
// import Cart frfom "./components/Cart"; // Importante para hitos futuros
import Footer from "./components/Footer";

function App() {
  return (
    <Router> {/* Aquí envolvemos toda la app con el Router */}
      <Navbar /> {/*Barra de navegación */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
