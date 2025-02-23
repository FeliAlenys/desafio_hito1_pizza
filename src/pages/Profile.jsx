import { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout, getProfile } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      getProfile();
    }
  }, [user, getProfile]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Perfil de Usuario</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout} className="btn btn-danger">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;