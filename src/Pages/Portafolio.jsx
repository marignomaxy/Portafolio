import Button from 'react-bootstrap/Button';
import Foto from '../Utils/Images/foto.png'
import CarrouselImg from '../Components/Carrousel';
import { Container, Row } from 'react-bootstrap';
import Cards from '../Components/Cards';
import { Link } from "react-router-dom"
import { useContext } from "react"
import { EnlaceActivoContext } from '../Context/contexEnlace';
import Arrow from '../Utils/Images/Arrow.png'

function Portafolio() {

  const carouselItems = [
    {
        id:1,
        fecha:"15 de enero",
        image: Foto,
        altText: 'Descripción de la imagen 1',
        title: 'Título del Slide 1',
        description: 'Descripción del Slide 1',
    },
    {
        id:2,
        fecha:"15 de enero",
        image: Foto,
        altText: 'Descripción de la imagen 2',
        title: 'Título del Slide 2',
        description: 'Descripción del Slide 2',
    },];

    const {enlaceActivo, setEnlaceActivo}= useContext(EnlaceActivoContext);

    const handleEnlaceClick = (nombreEnlace) => {
        setEnlaceActivo(nombreEnlace);
    };

  return (
    <>
      {/* Banner portafolio */}
      <div className='banner'>
        <div className='d-flex flex-column align-items-center'>
          <h1>Si lo podes soñar <br/> Lo hago realidad</h1>
          <div className='mt-5 d-flex justify-content-between align-items-center'>
            <Button className={`botonBannerAct ${enlaceActivo === "portafolio" ? "enlace-activo" : ""}`} as={Link} to="/portafolio" 
            onClick={() => handleEnlaceClick("portafolio")} >Mira mis proyectos</Button>
            <Button className='botonBannerSec mx-auto' as={Link} to="/">Contactame <img src={Arrow} alt="arrow" /></Button>
          </div>
        </div>
      </div>
      <div className="containerHome">
        <Container>
          <div className="row">
            <div className="col-xl-6 d-flex justify-content-center align-items-center">
              <div>
                <h3>Ultimo proyecto</h3>
                <h2>Beatcart Ecomers</h2>
                <p>Beatcart es un ecommerce ficticio el cual se creo para el curso de React Js brindado por la Universidad 
                  Tecnologica Nacional de Buenos Aires en la modalidad E-Learnig. La pagina utiliza la api publica de Mercado 
                  Libre para enlistar los productos que esta brinda.
                </p>
                <Button className="botonNav">Ir a Beatcart</Button>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='mt-5 mb-5'>
                <CarrouselImg items={carouselItems} />
              </div>
            </div>
          </div>

          {/* Elegir tecnologia */}

        <h3 className='text-center'>Elija la tecnologia que sea ver</h3>
        <div className="row d-flex justify-content-between align-items-center contenedorElegirTec">
          <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/40730/images/2781438/react.png" alt="React" className="img-fluid p-1" />
          <img src="https://helpx.adobe.com/content/dam/help/en/experience-manager/kt/sites/using/getting-started-spa-wknd-tutorial-develop/jcr_content/main-pars/multi_column/col-50-50-c2/image/angular-logo.png" alt="Angular" className="img-fluid" />
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="Node.js" className="img-fluid" />
          <img src="https://stackup.ru/wp-content/uploads/2019/02/sass-logo1-1023x682.png" alt="Sass" className="img-fluid" />
          <img src="https://intouch.ccgmag.com/resource/resmgr/client_logos/2020/logo_aws.png" alt="AWS" className="img-fluid" />
          <img src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013-768x432.png" alt="Docker" className="img-fluid" />
          <img src="https://th.bing.com/th/id/OIP.TEtKm7LVTbiDcC-Uncb74QAAAA?pid=ImgDet&rs=1" alt=".NET" className="img-fluid" />
          <img src="https://miro.medium.com/max/670/0*UTBrDcrJ6SbePBzR" alt="Figma" className="img-fluid" />
        </div>

          {/* Cards */}

          <Row>
            {carouselItems.map(item => <Cards key={item.id} title={item.title} description={item.description} image={item.image} fecha={item.fecha}/>)}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Portafolio