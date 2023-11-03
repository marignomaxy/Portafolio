import axios from 'axios'

export const obtenerUsuario = (data) => {
  return axios.post(`https://apiportafolio-production-5924.up.railway.app/usuarios`, data)
}
