import axios from 'axios'

export const obtenerCertificados = () => {
  return axios.get(`https://apiportafolio-production-5924.up.railway.app/certificados`)
}

export const obtenerCertificadoPorNombre = (nombre) => {
  console.log('nombe', nombre)
  return axios.get(`https://apiportafolio-production-5924.up.railway.app/certificados/${nombre}`)
}

export const crearCertificado = (data, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  }

  return axios.post(`https://apiportafolio-production-5924.up.railway.app/certificados`, data, config)
}

export const borrarCertificado = (id, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  }
  return axios.delete(`https://apiportafolio-production-5924.up.railway.app/certificados/${id}`, config)
}

export const actualizarCertificado = (data, certificado_id, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // Asegúrate de que es el tipo de contenido correcto
      Authorization: `${token}`, // Incluye el token en el encabezado de autorización
    },
  }
  return axios.put(`https://apiportafolio-production-5924.up.railway.app/certificados/${certificado_id}`, data, config)
}
