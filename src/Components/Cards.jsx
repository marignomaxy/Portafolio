/* eslint-disable react/prop-types */

import {Button,Card,Col} from 'react-bootstrap';

function Cards({ title, description, image,fecha }) {
  return (
    <Col xs={12} xxl={6}>
      <Card className='card mt-5 mb-5'>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Text>{fecha}</Card.Text>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary botonCards">Ver Detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}


export default Cards