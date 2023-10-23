import axios from "axios";

export const obtenerUsuario = (data) => {
  return axios.post(`https://apiportafolio.onrender.com/usuarios`, data);
};
