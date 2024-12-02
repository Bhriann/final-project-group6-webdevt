import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import '../style/PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addBooking } = useBooking();

  const bookingDetails = location.state;

  if (!bookingDetails) {
    return <p>No booking details available.</p>;
  }

  const handleConfirmPayment = () => {
    const bookingData = {
      room: bookingDetails.room,
      checkInDate: bookingDetails.checkInDate,
      checkOutDate: bookingDetails.checkOutDate,
      numOfNights: bookingDetails.numOfNights,
      totalPrice: bookingDetails.totalPrice,
    };
  
    console.log('Confirming payment with booking data:', bookingData); // Debug log
  
    addBooking(bookingData);
  
    navigate('/available-bookings');
  };

  return (
    <div className="payment-page">
      <h2>Confirm Your Booking</h2>
      <div className="booking-summary">
        <p>
          <strong>Room:</strong> {bookingDetails.room.name}
        </p>
        <p>
          <strong>Stay:</strong> {bookingDetails.numOfNights} night(s)
        </p>
        <p>
          <strong>Dates:</strong> {bookingDetails.checkInDate.toDateString()} -{' '}
          {bookingDetails.checkOutDate.toDateString()}
        </p>
        <p>
          <strong>Total Price:</strong> ₱{bookingDetails.totalPrice.toLocaleString()}
        </p>
      </div>
      <button className="confirm-payment-button" onClick={handleConfirmPayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;