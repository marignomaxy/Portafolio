import Foto from '../Utils/Images/foto.png'
import Button from 'react-bootstrap/Button';
import Arrow from '../Utils/Images/Arrow.png'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { EnlaceActivoContext } from '../Context/contexEnlace';
import CarrouselImg from './Carrousel';


function Banner() {

    const carouselItems = [
        {
            image: Foto,
            altText: 'Descripción de la imagen 1',
            title: 'Título del Slide 1',
            description: 'Descripción del Slide 1',
        },
        {
            image: Foto,
            altText: 'Descripción de la imagen 2',
            title: 'Título del Slide 2',
            description: 'Descripción del Slide 2',
        },
        // Agrega más objetos según sea necesario
    ];

    const {enlaceActivo, setEnlaceActivo}= useContext(EnlaceActivoContext);

    const handleEnlaceClick = (nombreEnlace) => {
        setEnlaceActivo(nombreEnlace);
    };
    
    return (
    <>
        <div className='banner'>
            <div className='row'>
                <div className='col-xl-6 col-md-12'>
                    <div className='mb-auto mt-auto'>
                        <h1>Soy Maximiliano Marigno y Soy Desarrollador full stack y diseñador UX /UI</h1>
                        <div className='mt-5 d-flex justify-content-between align-items-center'>
                            <Button className={`botonBannerAct ${enlaceActivo === "portafolio" ? "enlace-activo" : ""}`} as={Link} to="/portafolio" 
                            onClick={() => handleEnlaceClick("portafolio")} >Mira mis proyectos</Button>
                            <Button className='botonBannerSec mx-auto' as={Link} to="/">Contactame <img src={Arrow} alt="arrow" /></Button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6 col-md-12'>
                    <div className='negroDifuminado imgCarrousel'>
                        <div>
                            <CarrouselImg items={carouselItems} />
                        </div>
                        <div className='leyendaProyectos'>
                            <p>Ultimos Proyectos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Banner