import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../style/Rooms.css'; 

const Rooms = () => {
  const rooms = [
    {
      type: 'Standard Room',
      price: '$100/night',
      description: 'A cozy room with basic amenities for a comfortable stay.',
      img: 'https://via.placeholder.com/300x200'
    },
    {
      type: 'Deluxe Room',
      price: '$200/night',
      description: 'A spacious room with luxurious furnishings and great views.',
      img: 'https://via.placeholder.com/300x200'
    },
    {
      type: 'Suite',
      price: '$400/night',
      description: 'An extravagant suite with premium amenities and services.',
      img: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <Container className="rooms-section">
      <Row>
        {rooms.map((room, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={room.img} />
              <Card.Body>
                <Card.Title>{room.type}</Card.Title>
                <Card.Text>
                  {room.description}
                  <br />
                  <strong>{room.price}</strong>
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Rooms;