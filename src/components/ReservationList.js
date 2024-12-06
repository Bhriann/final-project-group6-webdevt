import React from 'react';
import { useBooking } from '../context/BookingContext'; // Hook to access the booking context

const ReservationList = ({ addCheckedinBooking }) => {
  const { bookings, deleteBooking } = useBooking();

  const handleCheckInClick = (booking) => {
    // Add the booking to checkedinList and delete it from bookings
    addCheckedinBooking(booking);
    deleteBooking(booking.bookingID);
  };

  const handleDeleteClick = (bookingID) => {
    deleteBooking(bookingID);
  };

  return (
    <div>
      <h2>Reservations List</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.bookingID}>
              <div>
                <p><strong>Booking ID:</strong> {booking.bookingID}</p>
                <p><strong>Room:</strong> {booking.room.name}</p>
                <p><strong>Stay:</strong> {booking.numOfNights} night(s)</p>
                <p><strong>Total Price:</strong> ₱{booking.totalPrice.toLocaleString()}</p>
                <p><strong>Customer Name:</strong> {booking.customerName}</p>
                <p><strong>Payment Method:</strong> {booking.paymentMethod}</p>
                <button onClick={() => handleCheckInClick(booking)}>Check-in</button>
                <button onClick={() => handleDeleteClick(booking.bookingID)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
};

export default ReservationList;
