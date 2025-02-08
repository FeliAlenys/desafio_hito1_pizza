import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from "../utils/helpers";
import { FaHome, FaUserCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';
import { useUser } from '../context/useUser';

const Navbar = () => {
  const { cart, cartTotal } = useCart();
  const { user, logout } = useUser(); // Utilice el hook useUser para obtener user y logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Se llama a la función logout del UserContext
    navigate('/') // Redirijo al usuario a la página principal después del logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><FaHome /> Home</Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile"><FaUserCircle /> Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}><FaSignOutAlt /> Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login"><FaSignInAlt /> Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register"><FaUserPlus /> Register</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart /> Carrito ({cart.length})
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light" to="/cart">
                🛒 Total: {formatPrice(cartTotal)}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;