import axios from 'axios'

export const obtenerPaginas = () => {
  return axios.get(`https://apiportafolio-production-5924.up.railway.app/paginas`)
}

export const obtenerPaginasPorNombre = (nombre) => {
  return axios.get(`https://apiportafolio-production-5924.up.railway.app/paginas/${nombre}`)
}

export const crearPagina = (data, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  }
  return axios.post(`https://apiportafolio-production-5924.up.railway.app/paginas`, data, config)
}

export const borrarPagina = (id, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  }
  return axios.delete(`https://apiportafolio-production-5924.up.railway.app/paginas/${id}`, config)
}

export const actualizarPagina = (data, pagina_id, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  }
  return axios.put(`https://apiportafolio-production-5924.up.railway.app/paginas/${pagina_id}`, data, config)
}
