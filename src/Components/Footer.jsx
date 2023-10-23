import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { EnlaceActivoContext } from "../Context/contexEnlace";
import { Link } from "react-router-dom";
import Arrow from "../Utils/Images/Arrow.png";
import Imagen from "../Utils/Images/Logo.png";
import face from "../Utils/Images/Facebook.svg";
import insta from "../Utils/Images/Instagram.svg";
import linkedin from "../Utils/Images/Linkedin.svg";
import whats from "../Utils/Images/WhatsApp.svg";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const { enlaceActivo, setEnlaceActivo } = useContext(EnlaceActivoContext);

  const handleEnlaceClick = (nombreEnlace) => {
    setEnlaceActivo(nombreEnlace);
  };

  return (
    <footer className="footer">
      {/* Banner que sobresale */}
      <div className="footer-banner d-flex align-items-center justify-content-center flex-column">
        <p>Yo estoy preparado¿Me das una oportunidad?</p>
        <h2>Hagamos historia juntos</h2>
        <div>
          <Button
            className={`botonFooterAct ${
              enlaceActivo === "portafolio" ? "enlace-activo" : ""
            }`}
            as={Link}
            to="/portafolio"
            onClick={() => handleEnlaceClick("portafolio")}
          >
            Mira mis proyectos
          </Button>
          <Button
            className="botonBannerSec mx-auto"
            as={Link}
            to="/contactame"
            onClick={() => handleEnlaceClick("contactame")}
          >
            Contactame <img src={Arrow} alt="arrow" />
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img src={Imagen} alt="logo" className="logoFooter mb-4 mt-2" />
          <div>
            <a
              href="https://www.linkedin.com/in/maximiliano-marigno-7b6772173/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="footerImgContacto"
              />
            </a>
            <a
              href="https://wa.me/5492213644416?text=Hola%20me%20contacto%20por%20tu%20portafolio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whats} alt="whatsapp" className="footerImgContacto" />
            </a>
            <a
              href="https://www.instagram.com/marignomaxy/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="instagram" className="footerImgContacto" />
            </a>
            <a
              href="https://m.facebook.com/maxy.marigno/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={face} alt="facebook" className="footerImgContacto" />
            </a>
          </div>
        </div>
        <div>
          <div>
            <Container className="d-flex justify-content-between">
              <Row>
                <Col>
                  <Nav.Link
                    as={Link}
                    to="/"
                    onClick={() => handleEnlaceClick("inicio")}
                    className={` ${
                      enlaceActivo === "inicio" ? "enlace-activo" : ""
                    }`}
                  >
                    Inicio
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/portafolio"
                    onClick={() => handleEnlaceClick("portafolio")}
                    className={` ${
                      enlaceActivo === "portafolio" ? "enlace-activo" : ""
                    }`}
                  >
                    Portafolio
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    onClick={() => handleEnlaceClick("about")}
                    className={` ${
                      enlaceActivo === "about" ? "enlace-activo" : ""
                    }`}
                  >
                    Acerca de mi
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contactame"
                    onClick={() => handleEnlaceClick("contactame")}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Trabajemos juntos
                  </Nav.Link>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Link to="/login" className="text-decoration-none text-dark">
        .
      </Link>
    </footer>
  );
}

export default Footer;
