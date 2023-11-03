import { useContext, useEffect, useState } from 'react'
import fotoMia from '../Utils/Images/fotomia.jpg'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Cards from '../Components/Cards'
import { EnlaceActivoContext } from '../Context/contexEnlace'
import Arrow from '../Utils/Images/Arrow.png'
import { obtenerCertificados } from '../services/certificadosServices'
import Spin from '../Components/Spin'

function About() {
  const [certificados, setCertificados] = useState([])
  const { enlaceActivo, setEnlaceActivo } = useContext(EnlaceActivoContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    obtenerCertificados()
      .then((response) => {
        console.log('respuesta cert', response.data)
        setCertificados(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error al obtener certificados:', error)
        setIsLoading(false)
      })
  }, [])

  const handleEnlaceClick = (nombreEnlace) => {
    setEnlaceActivo(nombreEnlace)
  }

  return (
    <div>
      {isLoading ? (
        <Spin />
      ) : (
        <div>
          {/* Banner */}
          <div className="banner">
            <div className="d-flex flex-column align-items-center">
              <h1>Conoce un poco de mi historia</h1>
              <div className="mt-5 d-flex justify-content-between align-items-center">
                <Button className={`botonBannerAct ${enlaceActivo === 'portafolio' ? 'enlace-activo' : ''}`} as={Link} to="/portafolio" onClick={() => handleEnlaceClick('portafolio')}>
                  Mira mis proyectos
                </Button>
                <Button className="botonBannerSec mx-auto" as={Link} to="/contactame" onClick={() => handleEnlaceClick('contactame')}>
                  Contactame <img src={Arrow} alt="arrow" />
                </Button>
              </div>
            </div>
          </div>
          <div className="containerHome">
            <Container>
              <Row>
                <Col xl={6} md={12} className="mt-5">
                  <img className="img-fluid imagenPerfil" src={fotoMia} alt="fotoPerfil" />
                </Col>
                <Col xl={6} md={12} className="mt-5">
                  <div className="colorAzul">
                    <h2>Un poco sobre mí</h2>
                    <p>
                      En primer lugar, ¡quiero agradecerte por tomarte el tiempo para visitar mi página! Incluso si no trabajamos juntos, aprecio que hayas considerado mi perfil. Mi nombre es
                      Maximiliano, tengo 25 años y soy un estudiante de Tecnicatura Superior en Programación con un enfoque en el desarrollo Full Stack. Soy de La Plata, Argentina, y mi pasión es dar
                      vida a través de la programación a proyectos que impacten de manera positiva en el mundo.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl={6} md={12} className="mt-5">
                  <div className="colorAmarillo">
                    <h2>Tecnologías y herramientas</h2>
                    <p>
                      Soy un apasionado desarrollador Full Stack con experiencia en tecnologías como Angular, React JS, .NET, Java, Node.js y una variedad de motores de bases de datos. Mi enfoque
                      abarca desde la creación de interfaces de usuario de alta calidad hasta el diseño de infraestructura en AWS. Mi objetivo es transformar la visión de las empresas en soluciones
                      impactantes y efectivas.
                    </p>
                  </div>
                </Col>
                <Col xl={6} md={12} className="mt-5">
                  <div className="colorVerde">
                    <h2>Objetivo a largo plazo</h2>
                    <p>
                      Mi objetivo a largo plazo es convertirme en un programador destacado y dejar una huella positiva en la industria. Quiero dominar diversas tecnologías y crear software innovador
                      que resuelva problemas reales. Además, busco contribuir activamente a la comunidad de desarrollo y ayudar a otros a crecer en su camino tecnológico. Mi ambición es ser reconocido
                      por mi excelencia técnica y mi compromiso con la innovación.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className="mt-5 text-center">Certificados</h2>
                </Col>
                <Row>
                  {certificados.map((certificado) => (
                    <Cards
                      key={certificado.id}
                      title={certificado.nombre_certificado}
                      description={certificado.descripcion}
                      image={certificado.ruta_foto}
                      fecha={certificado.fecha_fin_certificado}
                      url={certificado.url_certificado}
                    />
                  ))}
                </Row>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
