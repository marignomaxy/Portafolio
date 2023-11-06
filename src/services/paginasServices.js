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
      'Content-Type': 'multipart/form-data',
      Authorization: `${token}`,
    },
  }

  console.log('config', config)

  return axios.post(`https://apiportafolio-production-5924.up.railway.app/paginas`, data, config)
}

export const borrarPagina = (id, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${token}`,
    },
  }
  return axios.delete(`https://apiportafolio-production-5924.up.railway.app/paginas/${id}`, config)
}

export const actualizarPagina = (data, pagina_id, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${token}`,
    },
  }
  return axios.put(`https://apiportafolio-production-5924.up.railway.app/paginas/${pagina_id}`, data, config)
}
