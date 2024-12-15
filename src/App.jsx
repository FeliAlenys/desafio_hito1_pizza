//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";  // Importamos el Router
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> {/* Aquí envolvemos toda la app con el Router */}
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
