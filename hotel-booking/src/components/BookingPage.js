import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import '../style/BookingPage.css';

const BookingPage = () => {
  const [booking, setBooking] = useState({
    roomType: '',
    startDate: '',
    endDate: '',
  });

  const { addBooking } = useContext(BookingContext);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(booking); // Add the booking to the shared state
    alert('Your booking has been submitted!');
    setBooking({ roomType: '', startDate: '', endDate: '' }); // Reset the form
  };

  return (
    <div className="booking-page">
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="roomType">Room Type:</label>
        <select name="roomType" value={booking.roomType} onChange={handleChange} required>
          <option value="">-- Select Room Type --</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
        </select>

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={booking.startDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={booking.endDate}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingPage;