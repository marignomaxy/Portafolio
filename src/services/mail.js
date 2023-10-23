import axios from "axios";

export const enviarCorreo = (data) => {
  return axios.post(`https://apiportafolio.onrender.com/enviarEmail`, data);
};
