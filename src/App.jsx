import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CartProvider from "./context/CartProvider";
import Navbar from "./components/Navbar";
import { PizzaProvider } from "./context/PizzaContext";
import Pizza from "./components/Pizza";

function App() {
  return (
    <PizzaProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </PizzaProvider>
  );
}

export default App;