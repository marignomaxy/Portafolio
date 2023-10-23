import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { obtenerUsuario } from "../services/usersServices";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import AlertCustom from "../Components/AlertCustom";

function Login() {
  const [mail, setMail] = useState("");
  const [contraseña, setContraseña] = useState(""); // Agregamos el estado para la contraseña

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const handleLogin = async (data) => {
    // Cambiamos 'e' a 'data' para obtener los valores del formulario
    try {
      const response = await obtenerUsuario({
        mail: data.email,
        contraseña: data.password,
      }); // Usamos 'data.email' y 'data.password'
      let usuario = response.data.usuario;
      let token = response.data.token;
      setAlert({ variant: "success", text: `Bienvenido ${usuario?.mail}` });
      context.handlerLogin(usuario, token);
      setTimeout(() => {
        navigate("/master");
      }, 2000);
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      setAlert({ variant: "danger", text: `Error al obtener el usuario` });
    }
  };

  return (
    <div className="container">
      <AlertCustom {...alert} />
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit(handleLogin)}>
        {" "}
        {/* Usamos handleSubmit para manejar el envío del formulario */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese Email"
            {...register("email", { required: true })}
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <Form.Text className="text-muted">
            {errors.email && <span>El Campo Es Obligatorio</span>}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {" "}
          {/* Cambiamos 'formBasicEmail' a 'formBasicPassword' para la contraseña */}
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese Contraseña"
            {...register("password", { required: true, minLength: 6 })}
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <Form.Text className="text-muted">
            {errors.password?.type === "required" && (
              <span>El Campo Es Obligatorio</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>Debe Colocar 6 Caracteres</span>
            )}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
