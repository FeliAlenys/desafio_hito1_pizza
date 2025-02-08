import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import PropTypes from 'prop-types'; // Importamos PropTypes
import { useUser } from '../context/useUser'; // Asegúrate de que la ruta sea correcta
import '../form.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const { login } = useUser(); // Usamos el hook useUser
  const navigate = useNavigate(); // Inicialice useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Aquí simularemos un login exitoso
    login(); // Llamamos a la función login del contexto
    setMessage("Autenticación exitosa.");
    navigate('/'); // Redirigimos al usuario a la página principal
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
