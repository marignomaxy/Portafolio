import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { obtenerUsuario } from "../services/usersServices";
import { useNavigate } from "react-router-dom";

function Login() {
  const [mail, setMail] = useState("");
  const navigate = useNavigate();
  const [contraseña, setContraseña] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    obtenerUsuario({ mail, contraseña })
      .then((response) => {
        console.log("Usuario obtenido:", response.data);
        localStorage.setItem("token", response.data);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al obtener el usuario:", error);
      });
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
}

export default Login;
