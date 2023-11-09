import { useState, useEffect, useContext } from 'react'
import { obtenerPaginas, borrarPagina } from '../services/paginasServices'
import { obtenerCertificados, borrarCertificado } from '../services/certificadosServices'
import ModalCreacion from '../Components/ModalPagCer'
import { AuthContext } from '../Context/AuthContext'

function Master() {
  const [certificados, setCertificados] = useState([])
  const [paginas, setPaginas] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [tipo, setTipo] = useState('')
  const [elementoAEditar, setElementoAEditar] = useState(null)
  const context = useContext(AuthContext)

  const handleShowModalCreacionCertificado = () => {
    setTipo('certificado')
    setShowModal(true)
  }

  const handleBorrarCertificado = (id) => {
    const token = context.token
    borrarCertificado(id, token)
    actualizar()
  }

  const handleBorrarPagina = (id) => {
    const token = context.token
    borrarPagina(id, token)
    actualizar()
  }

  const handleShowModalCertificadoEditar = (Certificado) => {
    setTipo('certificado')
    setElementoAEditar({ nombre: Certificado })
    setShowModal(true)
  }
  const handleShowModalPaginaEditar = (Pagina) => {
    setTipo('pagina')
    setElementoAEditar({ nombre: Pagina })
    setShowModal(true)
  }

  const handleShowModalCreacionPagina = () => {
    setTipo('pagina')
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const actualizar = () => {
    obtenerPaginas()
      .then((response) => {
        setPaginas(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener páginas:', error)
      })
    obtenerCertificados()
      .then((response) => {
        console.log('respuesta cert', response.data)
        setCertificados(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener certificados:', error)
      })
  }

  useEffect(() => {
    actualizar()
  }, [])

  return context.login ? (
    <div className="container">
      <h2>Certificados</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Certificado</th>
            <th>Fotos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {certificados.map((certificado, index) => (
            <tr key={index}>
              <td className="align-middle">{certificado.nombre_certificado}</td>
              <td>
                <img src={certificado.ruta_foto} alt="foto certificado" className="fotoCertificado" />
              </td>
              <td>
                <button className="btn btn-danger botonBorrar" onClick={() => handleBorrarCertificado(certificado.certificado_id)}>
                  Borrar
                </button>
                <button className="btn btn-danger" onClick={() => handleShowModalCertificadoEditar(certificado.nombre_certificado)}>
                  Editar Certificado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-primary" onClick={handleShowModalCreacionCertificado}>
          Agregar certificado
        </button>
      </div>

      <h2>Páginas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Página</th>
            <th>Fotos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginas.map((pagina, index) => (
            <tr key={index}>
              {console.log(pagina)}
              <td className="align-middle">{pagina.nombre_pagina}</td>
              <td>
                <img src={pagina.ruta_foto} alt="foto pagina" className="fotoCertificado" />
              </td>
              <td>
                <button className="btn btn-danger botonBorrar" onClick={() => handleBorrarPagina(pagina.pagina_id)}>
                  Borrar
                </button>
                <button className="btn btn-danger" onClick={() => handleShowModalPaginaEditar(pagina.nombre_pagina)}>
                  Editar Página
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-primary" onClick={handleShowModalCreacionPagina}>
          Agregar página
        </button>
      </div>
      <ModalCreacion showModal={showModal} handleCloseModal={handleCloseModal} actualizar={actualizar} tipo={tipo} elementoAEditar={elementoAEditar} />
    </div>
  ) : (
    <div>
      <h2>Acceso Denegado, debe loguearse</h2>
    </div>
  )
}

export default Master
