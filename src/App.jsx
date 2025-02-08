import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";
import { UserProvider } from './context/UserContext';
import { useUser } from './hooks/useUser';
import AppRoutes from './routes/AppRoutes';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppContent() {
  const { user, login, logout } = useUser(); // Usa el hook useUser aquí

  return (
    <>
      <Navbar isAuthenticated={!!user} onLogout={logout} />
      <AppRoutes 
        isAuthenticated={!!user} 
        onLogin={login}
      />
      <Footer />
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <Router>
            <AppContent />
          </Router>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}

export default App;