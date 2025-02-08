import { Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types'; // Importa PropTypes
import Home from "../pages/Home";
import Pizza from "../pages/Pizza";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route 
        path="/cart" 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Cart />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Agrega la validación de PropTypes
AppRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
  };

export default AppRoutes;