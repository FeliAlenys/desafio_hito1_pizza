import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";
import { UserProvider } from './context/UserContext';
import AppRoutes from './routes/AppRoutes';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <Router>
            <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <AppRoutes 
              isAuthenticated={isAuthenticated} 
              onLogin={handleLogin}
            />
            <Footer />
          </Router>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}

export default App;