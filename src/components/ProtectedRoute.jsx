import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Paso 1: Importar PropTypes

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Paso 2: Añadir la validación de props
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default ProtectedRoute;