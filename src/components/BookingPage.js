import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import '../style/BookingPage.css';

const BookingPage = () => {
  const navigate = useNavigate();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const rooms = [
    {
      id: 1,
      name: 'Grand Deluxe King',
      description: '1 King bed • Sleeps 3 • 75 to 95 sq m',
      price: 14488, // Price per night
      image: '/path-to-image-1.jpg',
    },
    {
      id: 2,
      name: 'Premier Suite',
      description: '1 King bed • Sleeps 4 • 120 to 150 sq m',
      price: 25999, // Price per night
      image: '/path-to-image-2.jpg',
    },
    // Add more room details as needed
  ];

  const handleBookNow = (room) => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates.');
      return;
    }

    const numOfNights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );

    const totalPrice = room.price * numOfNights;

    navigate('/payment', {
      state: {
        room,
        checkInDate,
        checkOutDate,
        numOfNights,
        totalPrice,
      },
    });
  };

  return (
    <Container className="booking-container">
      <h2 className="text-center mb-4">Book a Room</h2>

      {/* Tabs for Check-In and Check-Out */}
      <Tabs defaultActiveKey="checkin" id="booking-tabs" className="mb-4">
        <Tab eventKey="checkin" title="Check In">
          <Row className="justify-content-center">
            <Col xs={12} sm={6}>
              <label htmlFor="check-in-date" className="form-label">
                Select Check-In Date:
              </label>
              <DatePicker
                id="check-in-date"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                placeholderText="Choose a date"
              />
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="checkout" title="Check Out">
          <Row className="justify-content-center">
            <Col xs={12} sm={6}>
              <label htmlFor="check-out-date" className="form-label">
                Select Check-Out Date:
              </label>
              <DatePicker
                id="check-out-date"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : new Date()}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                placeholderText="Choose a date"
              />
            </Col>
          </Row>
        </Tab>
      </Tabs>

      {/* Room Cards */}
      <div className="room-cards">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <p>₱{room.price.toLocaleString()} per night</p>
              <button
                className="book-now-button"
                onClick={() => handleBookNow(room)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BookingPage;