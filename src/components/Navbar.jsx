import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { formatPrice } from "../utils/helpers";
import { useCart } from '../hooks/useCart';

const Navbar = () => {
  const { cart, cartTotal } = useCart();
  const token = false; // Esto debería venir del contexto de autenticación

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
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile"><FaUserCircle /> Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout"><FaSignOutAlt /> Logout</Link>
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
