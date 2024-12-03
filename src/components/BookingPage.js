import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col } from 'react-bootstrap';
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
    {
    id: 3,
    name: 'Sigma suite',
    description: '1000 King bed • Sleeps 4 • 120 to 150 sq m',
    price: 3813381083109, // Price per night
    image: '/path-to-image-2.jpg',
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
      },
    });
  };

  return (
    <Container className="booking-container">
      <h2 className="text-center mb-4">Book a Room</h2>

      {/* row containing check-in and checkout*/}
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

      {/* room cards */}
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