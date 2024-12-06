import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import '../style/PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookings, addBooking } = useBooking();

  const bookingDetails = location.state;

  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  if (!bookingDetails) {
    return <p>No booking details available.</p>;
  }

  // functtion to generate a new booking id
  const generateBookingID = () => {
    let id;
    do {
      id = Math.floor(Math.random() * 1000000); // rng 
    } while (bookings.some((booking) => booking.bookingID === id)); // no same two IDs may be generated
    return id;
  };


  //payment page validations
  const handleConfirmPayment = () => {
    if (!customerName) {
      alert('Please enter your name.');
      return;
    }

    const bookingID = generateBookingID();

    const fullBookingDetails = {
      ...bookingDetails,
      bookingID,
      customerName,
      paymentMethod,
    };

    addBooking(fullBookingDetails);

    alert(`Booking Confirmed! Your Booking ID is: ${bookingID}`);
    navigate('/available-bookings');
  };

  return (
    <div className="payment-page">
      <h2>Confirm Your Booking</h2>
      <div className="booking-summary">
        <p><strong>Room:</strong> {bookingDetails.room.name}</p>
        <p><strong>Stay:</strong> {bookingDetails.numOfNights} night(s)</p>
        <p>
          <strong>Dates:</strong>{' '}
          {new Date(bookingDetails.checkInDate).toDateString()} -{' '}
          {new Date(bookingDetails.checkOutDate).toDateString()}
        </p>
        <p><strong>Total Price:</strong> ₱{bookingDetails.totalPrice.toLocaleString()}</p>
      </div>

      <div className="customer-details">
        <label>
          Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
      </div>

      <div className="payment-method">
        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
          </select>
        </label>
      </div>

      <button className="confirm-payment-button" onClick={handleConfirmPayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;