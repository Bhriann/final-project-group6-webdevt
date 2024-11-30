import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import '../style/AvailableBookings.css';

const AvailableBookings = () => {
  const { bookings } = useContext(BookingContext);

  return (
    <div className="available-bookings-page">
      <h2>Available Bookings</h2>
      <div className="booking-list">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <h3>Room Type: {booking.roomType}</h3>
              <p>Start Date: {booking.startDate}</p>
              <p>End Date: {booking.endDate}</p>
            </div>
          ))
        ) : (
          <p>No bookings available yet.</p>
        )}
      </div>
    </div>
  );
};

export default AvailableBookings;