import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import '../style/PaymentPage.css';

const PaymentPage = ({ loggedInUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookings, addBooking } = useBooking();

  const bookingDetails = location.state;

  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  useEffect(() => {
    // If logged in, set the customerName to the loggedInUser's name
    if (loggedInUser) {
      // No need to set customerName manually; loggedInUser.name will be used directly
    }
  }, [loggedInUser]);

  if (!bookingDetails) {
    return <p>No booking details available.</p>;
  }

  // Function to generate a new booking ID
  const generateBookingID = () => {
    let id;
    do {
      id = Math.floor(Math.random() * 1000000); // RNG
    } while (bookings.some((booking) => booking.bookingID === id)); // No duplicate IDs
    return id;
  };

  // Payment page validations
  const handleConfirmPayment = () => {
    if (!loggedInUser) {
      alert('Please log in to confirm your booking.');
      return;
    }

    const bookingID = generateBookingID();

    const fullBookingDetails = {
      ...bookingDetails,
      bookingID,
      customerName: loggedInUser.name, // Use the logged-in user's name directly
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
        {/* Display welcome message with the logged-in user's name */}
        {loggedInUser ? (
          <p>Welcome, {loggedInUser.name}!</p>
        ) : (
          <p>Please log in to confirm your booking.</p>
        )}
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
