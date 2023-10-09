import { Link } from "react-router-dom"
import {Nav,Navbar,Container} from 'react-bootstrap';
import Imagen from "../Utils/Images/Logo.png"
import Button from 'react-bootstrap/Button';
import { useContext } from "react"
import { EnlaceActivoContext } from '../Context/contexEnlace';


function Navegador() {

    const {enlaceActivo, setEnlaceActivo}= useContext(EnlaceActivoContext);

    const handleEnlaceClick = (nombreEnlace) => {
        setEnlaceActivo(nombreEnlace);
    };

    return (
        <Navbar expand="lg" className="contenedorNav">
            <Container className="displayNav">
                <Navbar.Brand as={Link} to="/"><img src={Imagen} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="centrarNav mx-auto">
                        <Nav.Link as={Link} to="/" onClick={() => handleEnlaceClick("inicio")} className={enlaceActivo === "inicio" ? "enlace-activo" : ""}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/portafolio" onClick={() => handleEnlaceClick("portafolio")} className={enlaceActivo === "portafolio" ? "enlace-activo" : ""}>Portafolio</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => handleEnlaceClick("about") } className={enlaceActivo === "about" ? "enlace-activo" : ""}>Acerca de mi</Nav.Link>
                    </Nav>
                    <Nav.Link as={Link} to="/"><Button className="botonNav mx-auto">Contactame</Button></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navegador