/* eslint-disable react/prop-types */

import { Button, Card, Col } from 'react-bootstrap'

function Cards({ title, description, image, fecha, url, tecnologia }) {
  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const formattedFecha = formatDate(fecha)
  return (
    <Col xs={12} xxl={6}>
      <Card className="card bg-white mt-5 mb-5">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Text>Fecha finalizacion:{formattedFecha}</Card.Text>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Tecnologias utilizadas:{tecnologia}</Card.Text>
          <Button variant="primary botonCards" href={url} target="_blank">
            Ver Detalle
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Cards
