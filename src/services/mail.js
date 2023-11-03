import axios from 'axios'

export const enviarCorreo = (data) => {
  return axios.post(`https://apiportafolio-production-5924.up.railway.app/enviarEmail`, data)
}
