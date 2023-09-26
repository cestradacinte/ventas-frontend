import { useState } from "react";
import { loginUser, getUserData } from "../api";
import "../assets/Login.css";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await loginUser(username, password);
      localStorage.setItem("token", loginResponse.data.access);
      
      const userData = await getUserData(loginResponse.data.access);

      if(userData.is_superuser) {
        navigate('/home');
      } else {
        setError("No tienes permisos para ingresar");
      }
    } catch (error) {
      setError("Error al iniciar sesion");
    }
  };
  return (
    <div className="container">
      <div className="login-box">
        <h2>POS SYSTEM</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={username}
              placeholder="Usuario"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='button' type="submit">Iniciar Sesion</button>
        </form>  
        {error && <div className="alert">
            <Alert color="error" severity="error">{error}</Alert>
        </div>}
      </div>
    </div>
  );
}

export default Login;
