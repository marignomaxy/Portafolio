import Banner from "../Components/Banner";
import fotoAuto from "../Utils/Images/autodidacta.png";
import fotoCompa from "../Utils/Images/compañerismo.png";
import fotoPro from "../Utils/Images/proactivo.png";
import fotoMia from "../Utils/Images/fotomia.jpg";
import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { EnlaceActivoContext } from "../Context/contexEnlace";
import { useContext, useEffect, useState } from "react";
import { obtenerPaginas } from "../services/paginasServices";

function Home() {
  const { enlaceActivo, setEnlaceActivo } = useContext(EnlaceActivoContext);
  const [paginas, setPaginas] = useState([]);

  const handleEnlaceClick = (nombreEnlace) => {
    setEnlaceActivo(nombreEnlace);
  };

  useEffect(() => {
    obtenerPaginas()
      .then((response) => {
        setPaginas(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener páginas:", error);
      });
  }, []);

  return (
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
              <p>
                Mi diferencial radica en mi enfoque proactivo, siempre buscando
                oportunidades para superar expectativas y lograr resultados
                sobresalientes.
              </p>
            </Col>
            <Col xl={4} md={6} className="text-center mt-5 mb-5">
              <img src={fotoCompa} alt="Compañerismo" className="img-fluid" />
              <h3>Compañerismo</h3>
              <p>
                Me destaco por mi espíritu de compañerismo, promoviendo la
                unidad y el apoyo para lograr objetivos de manera conjunta.
              </p>
            </Col>
            <Col xl={4} md={6} className="text-center mt-5 mb-5">
              <img src={fotoAuto} alt="Autodidacta" className="img-fluid" />
              <h3>Autodidacta</h3>
              <p>
                Exploro incansablemente, reflejando mi pasión autodidacta en un
                viaje constante hacia el conocimiento y la superación.
              </p>
            </Col>
          </Row>
          {/* Foto y texto */}
          <Row>
            <Col xl={6} md={12} className="mb-5">
              <img
                src={fotoMia}
                alt="Fotoretrato"
                className="img-fluid imagenRetrato"
              />
            </Col>
            <Col xl={6} md={12}>
              <h3>Un poco sobre mí</h3>
              <p>
                ¡Antes que nada, gracias por visitar mi página! Soy Maximiliano
                Marigno, vivo en La Plata, Argentina, y a mis 25 años, soy un
                apasionado desarrollador full stack y diseñador UX/UI. Mi
                objetivo es obtener un trabajo donde pueda aplicar mis
                habilidades y contribuir de manera significativa. ¡Explora más
                sobre mí, mi potencial y mi trayectoria en el mundo del
                desarrollo y diseño!
              </p>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => handleEnlaceClick("about")}
                className={enlaceActivo === "about" ? "enlace-activo" : ""}
              >
                <h4 className="colorH4">Conoce más sobre mí</h4>
              </Nav.Link>
              <h4>Tecnologías y herramientas</h4>

              <div className="d-flex contenedorTec">
                <div className="row">
                  <img
                    src="https://s3.amazonaws.com/media-p.slid.es/uploads/40730/images/2781438/react.png"
                    alt="React"
                    className="img-fluid"
                  />
                  <img
                    src="https://helpx.adobe.com/content/dam/help/en/experience-manager/kt/sites/using/getting-started-spa-wknd-tutorial-develop/jcr_content/main-pars/multi_column/col-50-50-c2/image/angular-logo.png"
                    alt="Angular"
                    className="img-fluid"
                  />
                  <img
                    src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png"
                    alt="Node.js"
                    className="img-fluid"
                  />
                  <img
                    src="https://stackup.ru/wp-content/uploads/2019/02/sass-logo1-1023x682.png"
                    alt="Sass"
                    className="img-fluid"
                  />
                  <img
                    src="https://intouch.ccgmag.com/resource/resmgr/client_logos/2020/logo_aws.png"
                    alt="AWS"
                    className="img-fluid"
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013-768x432.png"
                    alt="Docker"
                    className="img-fluid"
                  />
                  <img
                    src="https://th.bing.com/th/id/OIP.TEtKm7LVTbiDcC-Uncb74QAAAA?pid=ImgDet&rs=1"
                    alt=".NET"
                    className="img-fluid"
                  />
                  <img
                    src="https://miro.medium.com/max/670/0*UTBrDcrJ6SbePBzR"
                    alt="Figma"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
