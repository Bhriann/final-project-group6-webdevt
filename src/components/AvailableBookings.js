import React from 'react';
import { useBooking } from '../context/BookingContext';
import '../style/AvailableBookings.css';

const AvailableBookings = () => {
  const { bookings } = useBooking();

  console.log('Current bookings in AvailableBookings:', bookings); // Debug log

  return (
    <div className="available-bookings">
      <h2>Available Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((booking, index) => (
            <li key={index} className="booking-item">
              <h3>{booking.room.name}</h3>
              <p>
                <strong>Stay:</strong> {booking.numOfNights} night(s)
              </p>
              <p>
                <strong>Dates:</strong> {new Date(booking.checkInDate).toDateString()} -{' '}
                {new Date(booking.checkOutDate).toDateString()}
              </p>
              <p>
                <strong>Total Price:</strong> ₱{booking.totalPrice.toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailableBookings;