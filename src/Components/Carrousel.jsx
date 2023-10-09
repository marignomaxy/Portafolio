/* eslint-disable react/prop-types */
import Carousel from 'react-bootstrap/Carousel';

function CarrouselImg({ items }) {
    return (
            <Carousel fade={false}>
                {items.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            src={item.image}
                            alt={item.altText}
                            className="img-fluid"
                        />
                        <Carousel.Caption className="carrouselStyle">
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
    );
}

export default CarrouselImg;
