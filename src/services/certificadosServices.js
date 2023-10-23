import axios from "axios";

export const obtenerCertificados = () => {
  return axios.get(`https://apiportafolio.onrender.com/certificados`);
};

export const obtenerCertificadoPorNombre = (nombre) => {
  console.log("nombe", nombre);
  return axios.get(`https://apiportafolio.onrender.com/certificados/${nombre}`);
};

export const crearCertificado = (data, token) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data", // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  };

  return axios.post(
    `https://apiportafolio.onrender.com/certificados`,
    data,
    config
  );
};

export const borrarCertificado = (id, token) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data", // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  };
  return axios.delete(
    `https://apiportafolio.onrender.com/certificados/${id}`,
    config
  );
};

export const actualizarCertificado = (data, certificado_id, token) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data", // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  };
  return axios.put(
    `https://apiportafolio.onrender.com/certificados/${certificado_id}`,
    data,
    config
  );
};
