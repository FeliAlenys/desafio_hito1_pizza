const Profile = () => {
    const userEmail = "usuario@ejemplo.com"; // Este será reemplazado con la lógica de autenticación real más adelante
  
    const handleLogout = () => {
      // Aquí irá la lógica de cierre de sesión
      console.log("Cerrar sesión");
    };
  
    return (
      <div className="container mt-5">
        <h2>Perfil de Usuario</h2>
        <p>Email: {userEmail}</p>
        <button onClick={handleLogout} className="btn btn-danger">
          Cerrar Sesión
        </button>
      </div>
    );
  };
  
  export default Profile;