import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUser } from '../hooks/useUser'; // Cambiamos la importación

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;