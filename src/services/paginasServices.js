import axios from "axios";

export const obtenerPaginas = () => {
  return axios.get(`https://apiportafolio.onrender.com/paginas`);
};

export const obtenerPaginasPorNombre = (nombre) => {
  return axios.get(`https://apiportafolio.onrender.com/paginas/${nombre}`);
};

export const crearPagina = (data, token) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data", // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  };
  return axios.post(`https://apiportafolio.onrender.com/paginas`, data, config);
};

export const borrarPagina = (id, token) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data", // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  };
  return axios.delete(
    `https://apiportafolio.onrender.com/paginas/${id}`,
    config
  );
};

export const actualizarPagina = (data, pagina_id, token) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data", // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  };
  return axios.put(
    `https://apiportafolio.onrender.com/paginas/${pagina_id}`,
    data,
    config
  );
};
