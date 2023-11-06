import { useEffect, useState, useContext } from 'react'
import Banner from '../Components/Banner'
import fotoAuto from '../Utils/Images/autodidacta.png'
import fotoCompa from '../Utils/Images/compañerismo.png'
import fotoPro from '../Utils/Images/proactivo.png'
import fotoMia from '../Utils/Images/fotomia.jpg'
import { Link } from 'react-router-dom'
import { Nav, Container, Row, Col } from 'react-bootstrap'
import { EnlaceActivoContext } from '../Context/contexEnlace'
import { obtenerPaginas } from '../services/paginasServices'
import Spin from '../Components/Spin' // Reemplaza "ruta-donde-se-encuentra-tu-Spinner" con la ruta real de tu Spinner.

function Home() {
  const { enlaceActivo, setEnlaceActivo } = useContext(EnlaceActivoContext)
  const [paginas, setPaginas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleEnlaceClick = (nombreEnlace) => {
    setEnlaceActivo(nombreEnlace)
  }

  useEffect(() => {
    obtenerPaginas()
      .then((response) => {
        setPaginas(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error al obtener páginas:', error)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {isLoading ? (
        <Spin /> // Muestra el spinner mientras los datos se están cargando
      ) : (
        <>
          <Banner items={paginas} />
          <div className="containerHome">
            <Container>
              <h2 className="text-center">¿Qué me hace diferente?</h2>
              {/* Diferente */}
              <Row>
                <Col xl={4} md={6} className="text-center mt-5 mb-5">
                  <img src={fotoPro} alt="Proactivo" className="img-fluid" />
                  <h3>Proactivo</h3>
                  <p>Mi diferencial radica en mi enfoque proactivo, siempre buscando oportunidades para superar expectativas y lograr resultados sobresalientes.</p>
                </Col>
                <Col xl={4} md={6} className="text-center mt-5 mb-5">
                  <img src={fotoCompa} alt="Compañerismo" className="img-fluid" />
                  <h3>Compañerismo</h3>
                  <p>Me destaco por mi espíritu de compañerismo, promoviendo la unidad y el apoyo para lograr objetivos de manera conjunta.</p>
                </Col>
                <Col xl={4} md={6} className="text-center mt-5 mb-5">
                  <img src={fotoAuto} alt="Autodidacta" className="img-fluid" />
                  <h3>Autodidacta</h3>
                  <p>Exploro incansablemente, reflejando mi pasión autodidacta en un viaje constante hacia el conocimiento y la superación.</p>
                </Col>
              </Row>
              {/* Foto y texto */}
              <Row>
                <Col xl={6} md={12} className="mb-5">
                  <img src={fotoMia} alt="Fotoretrato" className="img-fluid imagenRetrato" />
                </Col>
                <Col xl={6} md={12}>
                  <h3>Un poco sobre mí</h3>
                  <p>
                    ¡Antes que nada, gracias por visitar mi página! Soy Maximiliano Marigno, vivo en La Plata, Argentina, y a mis 25 años, soy un apasionado desarrollador full stack y diseñador UX/UI.
                    Mi objetivo es obtener un trabajo donde pueda aplicar mis habilidades y contribuir de manera significativa. ¡Explora más sobre mí, mi potencial y mi trayectoria en el mundo del
                    desarrollo y diseño!
                  </p>
                  <Nav.Link as={Link} to="/about" onClick={() => handleEnlaceClick('about')} className={enlaceActivo === 'about' ? 'enlace-activo' : ''}>
                    <h4 className="colorH4">Conoce más sobre mí</h4>
                  </Nav.Link>
                  <h4>Tecnologías y herramientas</h4>
                  <div className="d-flex contenedorTec">
                    <div className="row">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="javascript" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="typescript" />
                      <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react js" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="angular" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="node js" />
                      <img src="https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png" alt="javaSpring" />
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="sass" />
                        <img src="https://www.c3ntro.com/hubfs/logo-aws-blanco%20(1).png" alt="aws" />
                        <img src="https://variwiki.com/images/a/a1/Docker.png" alt="docker" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  )
}

export default Home
