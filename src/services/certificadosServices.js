import axios from "axios";

export const obtenerCertificados = () => {
  return axios.get(`https://apiportafolio.onrender.com/certificados`);
};

export const obtenerCertificadoPorNombre = (nombre) => {
  console.log("nombe", nombre);
  return axios.get(`https://apiportafolio.onrender.com/certificados/${nombre}`);
};

export const crearCertificado = (data) => {
  return axios.post(`https://apiportafolio.onrender.com/certificados`, data);
};

export const borrarCertificado = (id) => {
  return axios.delete(`https://apiportafolio.onrender.com/certificados/${id}`);
};

export const actualizarCertificado = (data, certificado_id) => {
  return axios.put(
    `https://apiportafolio.onrender.com/certificados/${certificado_id}`,
    data
  );
};
