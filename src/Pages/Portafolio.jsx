import { Link } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'
import Cards from '../Components/Cards'
import { useContext, useEffect, useState } from 'react'
import { EnlaceActivoContext } from '../Context/contexEnlace'
import Arrow from '../Utils/Images/Arrow.png'
import { obtenerPaginas } from '../services/paginasServices'
import Spin from '../Components/Spin'

function Portafolio() {
  const [paginas, setPaginas] = useState([])
  const [paginaMasNueva, setPaginaMasNueva] = useState(null)
  const { enlaceActivo, setEnlaceActivo } = useContext(EnlaceActivoContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    obtenerPaginas()
      .then((response) => {
        setPaginas(response.data)
        // Encontrar la página más nueva
        if (response.data.length > 0) {
          const paginaMasNueva = response.data.reduce((prev, current) => {
            return new Date(current.fecha_fin) > new Date(prev.fecha_fin) ? current : prev
          })
          setPaginaMasNueva(paginaMasNueva)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error('Error al obtener páginas:', error)
        setIsLoading(false)
      })
  }, [])

  const handleEnlaceClick = (nombreEnlace) => {
    setEnlaceActivo(nombreEnlace)
  }

  return (
    <div>
      {isLoading ? (
        <Spin /> // Muestra el spinner mientras los datos se están cargando
      ) : (
        <div>
          {/* Banner portafolio */}
          <div className="banner">
            <div className="d-flex flex-column align-items-center">
              <h1>
                Si lo puedes soñar <br /> Lo hago realidad
              </h1>
              <div className="mt-5 d-flex justify-content-between align-items-center">
                <Button className={`botonBannerAct ${enlaceActivo === 'portafolio' ? 'enlace-activo' : ''}`} as={Link} to="/portafolio" onClick={() => handleEnlaceClick('portafolio')}>
                  Mira mis proyectos
                </Button>
                <Button className="botonBannerSec mx-auto" as={Link} to="/contactame" onClick={() => handleEnlaceClick('contactame')}>
                  Contáctame <img src={Arrow} alt="arrow" />
                </Button>
              </div>
            </div>
          </div>
          <div className="containerHome">
            <Container>
              <div className="row">
                <div className="col-xl-6 d-flex justify-content-center align-items-center">
                  <div>
                    <h3>Últimos proyectos</h3>
                    <h2>{paginaMasNueva?.nombre_pagina}</h2>
                    <p>{paginaMasNueva?.descripcion}</p>
                    <Button className="botonNav" href={paginaMasNueva?.url_pagina} target="_blank">
                      Ir a {paginaMasNueva?.nombre_pagina}
                    </Button>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mt-5 mb-5">
                    <img src={paginaMasNueva?.ruta_foto} alt="foto reciente" className="img-fluid" />
                  </div>
                </div>
              </div>

              <h3 className="text-center">Páginas realizadas</h3>

              {/* Cards */}
              <Row>
                {paginas.map((pagina) => (
                  <Cards key={pagina.pagina_id} title={pagina.nombre_pagina} description={pagina.descripcion} image={pagina.ruta_foto} fecha={pagina.fecha_fin} url={pagina.url_pagina} />
                ))}
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portafolio
