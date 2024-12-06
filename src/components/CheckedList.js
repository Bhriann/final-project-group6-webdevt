import React from 'react';
import { useBooking } from '../context/BookingContext'; // Hook to access the booking context


const CheckedList = ({ checkedinList, setCheckedinList }) => {
    
  const handleCheckOutClick = (bookingID) => {
    setCheckedinList((prevCheckedinList) =>
    prevCheckedinList.filter((booking) => booking.bookingID !== bookingID))
  };

  return (
    <div>
      <h2>Checked-in Reservations</h2>
      {checkedinList.length > 0 ? (
        <ul>
          {checkedinList.map((booking) => (
            <li key={booking.bookingID}>
              <div>
                <p><strong>Booking ID:</strong> {booking.bookingID}</p>
                <p><strong>Room:</strong> {booking.room.name}</p>
                <p><strong>Stay:</strong> {booking.numOfNights} night(s)</p>
                <p><strong>Total Price:</strong> ₱{booking.totalPrice.toLocaleString()}</p>
                <p><strong>Customer Name:</strong> {booking.customerName}</p>
                <p><strong>Payment Method:</strong> {booking.paymentMethod}</p>
                <button onClick={() => handleCheckOutClick(booking.bookingID)}>Check-out</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No checked-in reservations found.</p>
      )}
    </div>
  );
};

export default CheckedList;
