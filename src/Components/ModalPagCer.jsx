/* eslint-disable react/prop-types */
import { Modal, Form, Button } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import DatePicker from 'react-datepicker'
import { crearPagina, obtenerPaginasPorNombre, actualizarPagina } from '../services/paginasServices'
import { crearCertificado, actualizarCertificado, obtenerCertificadoPorNombre } from '../services/certificadosServices'
import { parseISO } from 'date-fns'
import { AuthContext } from '../Context/AuthContext'

function ModalPagCer({ showModal, handleCloseModal, actualizar, tipo, elementoAEditar }) {
  const [fecha, setFecha] = useState(null)
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState(null)
  const [tecnologia, setTecnologia] = useState('')
  const [destacado, setDestacado] = useState(false)
  const [url, setUrl] = useState('')
  const [pagina_id, setPagina_id] = useState('')
  const [certificado_id, setCertificado_id] = useState('')
  const context = useContext(AuthContext)

  useEffect(() => {
    if (elementoAEditar) {
      if (tipo === 'pagina') {
        obtenerPaginasPorNombre(elementoAEditar.nombre)
          .then((response) => {
            const paginaEditar = response.data[0] // Accede al primer elemento del arreglo
            console.log('response pagina editar', paginaEditar)
            setDescripcion(paginaEditar.descripcion)
            setNombre(paginaEditar.nombre_pagina)
            setFecha(parseISO(paginaEditar.fecha_fin))
            setTecnologia(paginaEditar.tecnologia)
            setUrl(paginaEditar.url_pagina)
            setPagina_id(paginaEditar.pagina_id)
          })
          .catch((error) => {
            console.error('Error al obtener paginas para editar:', error)
          })
      } else {
        obtenerCertificadoPorNombre(elementoAEditar.nombre)
          .then((response) => {
            const certEditar = response.data[0] // Accede al primer elemento del arreglo
            console.log('response pagina editar', certEditar)
            setDescripcion(certEditar.descripcion)
            setNombre(certEditar.nombre_certificado)
            setFecha(parseISO(certEditar.fecha_fin_certificado))
            setUrl(certEditar.url_pagina)
            setCertificado_id(certEditar.certificado_id)
            setImagen(certEditar.ruta_foto_certificado)
          })
          .catch((error) => {
            console.error('Error al obtener paginas para editar:', error)
          })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementoAEditar])

  const handleCambioFecha = (date) => {
    setFecha(date)
  }

  const handleFileChange = (event) => {
    setImagen(event.target.files[0])
  }

  const handleFormSubmit = async () => {
    try {
      const token = context.token
      const formData = new FormData()
      formData.append('nombre', nombre)
      formData.append('descripcion', descripcion)
      formData.append('image', imagen)
      formData.append('url', url)

      if (tipo === 'pagina') {
        formData.append('tecnologia', tecnologia)
        formData.append('destacado', destacado)
        formData.append('fecha', fecha.toISOString())

        if (elementoAEditar) {
          await actualizarPagina(formData, pagina_id, token)
          console.log('Página actualizada')
        } else {
          await crearPagina(formData, token)
          console.log('Página creada')
        }
      } else if (tipo === 'certificado') {
        formData.append('fecha_finalizacion', fecha.toISOString())
        if (elementoAEditar) {
          await actualizarCertificado(formData, certificado_id, token)
          console.log('Página actualizada')
        } else {
          await crearCertificado(formData, token)
          console.log('Página creada')
        }
      }

      if (typeof actualizar === 'function') {
        actualizar()
      }

      handleCloseModal()
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    }
  }

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{tipo === 'pagina' ? 'Subir Página' : 'Subir Certificado'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre del {tipo === 'pagina' ? 'página' : 'certificado'}</Form.Label>
            <Form.Control type="text" placeholder={`Nombre del ${tipo === 'pagina' ? 'página' : 'certificado'}`} value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
          </Form.Group>
          {tipo === 'pagina' && (
            <>
              <Form.Group>
                <Form.Label>Tecnología</Form.Label>
                <Form.Control type="text" placeholder="Tecnología" value={tecnologia} onChange={(e) => setTecnologia(e.target.value)} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Destacado</Form.Label>
                <Form.Check type="checkbox" label="Marcar como destacado" checked={destacado} onChange={(e) => setDestacado(e.target.checked)} required />
              </Form.Group>
            </>
          )}
          <Form.Group>
            <Form.Label>Subir imagen</Form.Label>
            <Form.Control type="file" name="image" accept="image/*" placeholder="Subir Imagen" onChange={handleFileChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>URl</Form.Label>
            <Form.Control type="text" placeholder="Url" value={url} onChange={(e) => setUrl(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha de finalización</Form.Label>
            <DatePicker selected={fecha} onChange={handleCambioFecha} className="form-control" dateFormat="yyyy/MM/dd" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleFormSubmit}>
          Enviar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalPagCer
