import axios from "axios";

export const obtenerPaginas = () => {
  return axios.get(`https://apiportafolio.onrender.com/paginas`);
};

export const obtenerPaginasPorNombre = (nombre) => {
  console.log("nombe", nombre);
  return axios.get(`https://apiportafolio.onrender.com/paginas/${nombre}`);
};

export const crearPagina = (data) => {
  return axios.post(`https://apiportafolio.onrender.com/paginas`, data);
};

export const borrarPagina = (id) => {
  return axios.delete(`https://apiportafolio.onrender.com/paginas/${id}`);
};

export const actualizarPagina = (data, pagina_id) => {
  return axios.put(
    `https://apiportafolio.onrender.com/paginas/${pagina_id}`,
    data
  );
};
