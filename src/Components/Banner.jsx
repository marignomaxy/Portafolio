import Button from "react-bootstrap/Button";
import Arrow from "../Utils/Images/Arrow.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { EnlaceActivoContext } from "../Context/contexEnlace";
import CarrouselImg from "./Carrousel";

// eslint-disable-next-line react/prop-types
function Banner({ items }) {
  const { enlaceActivo, setEnlaceActivo } = useContext(EnlaceActivoContext);

  const handleEnlaceClick = (nombreEnlace) => {
    setEnlaceActivo(nombreEnlace);
  };

  return (
    <>
      <div className="banner">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="mb-auto mt-auto">
              <h1>
                Soy Maximiliano Marigno,Desarrollador full stack y diseñador UX
                /UI
              </h1>
              <div className="mt-5 d-flex justify-content-between align-items-center">
                <Button
                  className={`botonBannerAct ${
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
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="negroDifuminado imgCarrousel">
              <div>
                <CarrouselImg items={items} />
              </div>
              <div className="leyendaProyectos">
                <p>Ultimos Proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
