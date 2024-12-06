import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/BookingPage.css';

const BookingPage = ({ loggedInUser }) => {
  const navigate = useNavigate();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const rooms = [
    {
      id: 1,
      name: 'Grand Deluxe King',
      description: '1 King bed • Sleeps 2 • 75 to 95 sq m',
      price: 520,
      image: 'images/cityroom.jpeg',
    },
    {
      id: 2,
      name: 'Premier Suite',
      description: '1 King bed • Sleeps 3 • 120 to 150 sq m',
      price: 700,
      image: 'images/bigroom.jpg',
    },
    {
      id: 3,
      name: 'Sigma Suite',
      description: '1 King bed • Sleeps 4 • 120 to 150 sq m',
      price: 516774,
      image: 'images/bigroomcity.jpeg',
    },
  ];

  const handleCheckInChange = (date) => {
    if (checkOutDate && date >= checkOutDate) {
      alert('Check-In date must be earlier than the Check-Out date.');
      return;
    }
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    if (checkInDate && date <= checkInDate) {
      alert('Check-Out date must be later than the Check-In date.');
      return;
    }
    setCheckOutDate(date);
  };

  const handleBookNow = (room) => {
    if (!loggedInUser) {
      alert('You must be logged in to book a room.');
      navigate('/login'); // Redirect to login page
      return;
    }

    if (!checkInDate || !checkOutDate) {
      alert('Please select both Check-In and Check-Out dates.');
      return;
    }

    const numOfNights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );

    if (numOfNights <= 0) {
      alert('Check-In and Check-Out dates cannot be the same.');
      return;
    }

    const totalPrice = room.price * numOfNights;

    navigate('/payment', {
      state: {
        room,
        checkInDate,
        checkOutDate,
        numOfNights,
        totalPrice,
        customerName: loggedInUser.name, // Pass the logged-in user's name
      },
    });
  };

  return (
    <Container className="booking-container">
      <h2 className="text-center mb-4">Book a Room</h2>

      {/* Date picker */}
      <Row className="date-picker-row justify-content-center mb-4">
        <Col xs={12} sm={6} md={5}>
          <label htmlFor="check-in-date" className="form-label">
            Check-In Date:
          </label>
          <DatePicker
            id="check-in-date"
            selected={checkInDate}
            onChange={handleCheckInChange}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className="form-control"
            placeholderText="Select Check-In Date"
          />
        </Col>
        <Col xs={12} sm={6} md={5}>
          <label htmlFor="check-out-date" className="form-label">
            Check-Out Date:
          </label>
          <DatePicker
            id="check-out-date"
            selected={checkOutDate}
            onChange={handleCheckOutChange}
            minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : new Date()}
            dateFormat="yyyy-MM-dd"
            className="form-control"
            placeholderText="Select Check-Out Date"
          />
        </Col>
      </Row>

      {/* Room rows */}
      {rooms.map((room) => (
        <Container key={room.id} className="room-row mb-4">
          <Row className="align-items-center">
            {/* Room Image */}
            <Col xs={12} md={4}>
              <img
                src={room.image}
                alt={room.name}
                className="room-image img-fluid rounded"
              />
            </Col>
            {/* Room Details */}
            <Col xs={12} md={6}>
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <p>₱{room.price.toLocaleString()} per night</p>
            </Col>
            {/* Book Now Button */}
            <Col xs={12} md={2}>
              <Button
                variant="primary"
                onClick={() => handleBookNow(room)}
                className="book-now-button"
              >
                Book Now
              </Button>
            </Col>
          </Row>
        </Container>
      ))}
    </Container>
  );
};

export default BookingPage;