import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import '../style/MyBookings.css';

const MyBookings = () => {
  const { bookings, updateBooking, deleteBooking } = useBooking();
  const [editingBooking, setEditingBooking] = useState(null); // Track the booking being edited

  console.log('Current bookings in MyBookings:', bookings); // Debug log

  // Handle booking update (for example, updating room price or dates)
  const handleUpdateBooking = (booking) => {
    const updatedBooking = {
      ...booking,
      totalPrice: booking.numOfNights * 2000, // Example of updating total price based on nights
    };
    updateBooking(updatedBooking);
    setEditingBooking(null); // Reset editing state
  };

  // Handle booking cancel (delete)
  const handleCancelBooking = (bookingID) => {
    deleteBooking(bookingID);
  };

  return (
    <div className="My-bookings">
      <h2>My Bookings</h2>
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
              <p><strong>Customer name: </strong>{booking.customerName}</p>
              <p><strong>Payment method: </strong>{booking.paymentMethod}</p>
              <p><strong>Booking ID:</strong> {booking.bookingID}</p>

              {/* Cancel button */}
              <button onClick={() => handleCancelBooking(booking.bookingID)}>Cancel Booking</button>

              {/* If we are editing this booking, show the update form */}
              {editingBooking === booking && (
                <div>
                  <button onClick={() => handleUpdateBooking(booking)}>Confirm Update</button>
                  <button onClick={() => setEditingBooking(null)}>Cancel Update</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
