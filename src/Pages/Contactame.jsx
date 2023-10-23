/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { enviarCorreo } from "../services/mail";

function Contactame() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    destinatario: "",
    mensaje: "",
  });

  const pasos = [
    { numero: 1, label: "Información Básica" },
    { numero: 2, label: "Mensaje" },
    { numero: 3, label: "Resumen" },
  ];

  const handleStepChange = (nextStep) => {
    if (nextStep >= 1 && nextStep <= pasos.length) {
      setStep(nextStep);
    }
  };

  const onSubmit = async (data) => {
    setFormData(data);
    handleStepChange(step + 1);
    console.log("paso", step);
    if (step === 2) {
      try {
        console.log(data);
        const response = await enviarCorreo(data);
        console.log("Mail enviado", response);
      } catch (error) {
        console.log("error al enviar el email", error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <ul className="nav nav-pills justify-content-around mb-3">
            {pasos.map((paso) => (
              <li key={paso.numero} className={`nav-item`}>
                <span
                  className={`circle ${step === paso.numero ? "active" : ""}`}
                  onClick={() => handleStepChange(paso.numero)}
                >
                  {paso.numero}
                </span>
              </li>
            ))}
          </ul>
          <div>
            {step === 1 && (
              <div>
                <h2>Paso 1: Información Básica</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su Nombre"
                      {...register("nombre", {
                        required: "El Campo Es Obligatorio",
                      })}
                    />
                    <Form.Text className="text-muted">
                      {errors.nombre && <span>{errors.nombre.message}</span>}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su Apellido"
                      {...register("apellido", {
                        required: "El Campo Es Obligatorio",
                      })}
                    />
                    <Form.Text className="text-muted">
                      {errors.apellido && (
                        <span>{errors.apellido.message}</span>
                      )}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su correo"
                      {...register("email", {
                        required: "El Campo Es Obligatorio",
                      })}
                    />
                    <Form.Text className="text-muted">
                      {errors.email && <span>{errors.email.message}</span>}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono:</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese su número de teléfono"
                      {...register("telefono", {
                        required: "El Campo Es Obligatorio",
                      })}
                    />
                    <Form.Text className="text-muted">
                      {errors.telefono && (
                        <span>{errors.telefono.message}</span>
                      )}
                    </Form.Text>
                  </Form.Group>
                  <div className="d-flex justify-content-center align-items-center mb-5">
                    <button
                      className="botonCards btn btn-primary"
                      type="submit"
                    >
                      Siguiente
                    </button>
                  </div>
                </Form>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2>Paso 2: Mensaje</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mensaje a enviar:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      {...register("mensaje", {
                        required: "El Campo Es Obligatorio",
                      })}
                    />
                    <Form.Text className="text-muted">
                      {errors.mensaje && <span>{errors.mensaje.message}</span>}
                    </Form.Text>
                  </Form.Group>
                  <div className="d-flex justify-content-around align-items-center mb-5">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleStepChange(1)}
                    >
                      Anterior
                    </button>
                    <button
                      className="botonCards btn btn-primary"
                      type="submit"
                    >
                      Siguiente
                    </button>
                  </div>
                </Form>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2>Paso 3: Resumen</h2>
                <div className="mb-3">
                  <strong>Nombre:</strong> {formData.nombre}
                </div>
                <div className="mb-3">
                  <strong>Apellido:</strong> {formData.apellido}
                </div>
                <div className="mb-3">
                  <strong>Telefono:</strong> {formData.telefono}
                </div>
                <div className="mb-3">
                  <strong>Email:</strong> {formData.email}
                </div>
                <div className="mb-3">
                  <strong>Mensaje:</strong> {formData.mensaje}
                </div>
                <div className="d-flex justify-content-around align-items-center mb-5">
                  <button
                    className="btn btn-secondary me-3"
                    onClick={() => handleStepChange(2)}
                  >
                    Anterior
                  </button>
                  <button className="btn btn-success" type="submit">
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactame;
