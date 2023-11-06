/* eslint-disable react/prop-types */
import Carousel from 'react-bootstrap/Carousel'

function CarrouselImg({ items }) {
  return (
    <Carousel fade={false}>
      {items
        .filter((item) => item.destacado) // Filtra elementos destacados
        .map((item, index) => (
          <Carousel.Item key={index}>
            <img src={item.ruta_foto} alt="foto pagina" className="img-fluid" />
            <Carousel.Caption className="carrouselStyle">
              <div>
                <h3>{item.nombre_pagina}</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default CarrouselImg
