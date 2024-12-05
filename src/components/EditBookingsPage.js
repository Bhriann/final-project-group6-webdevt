import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';

const EditBookingsPage = () => {
  const { bookings, updateBooking } = useBooking();
  const [searchID, setSearchID] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSearch = () => {
    const booking = bookings.find((b) => b.bookingID === parseInt(searchID));
    if (booking) {
      setSelectedBooking(booking);
      setCustomerName(booking.customerName);
      setPaymentMethod(booking.paymentMethod);
    } else {
      alert('No booking found with that ID.');
    }
  };

  const handleSave = () => {
    if (!customerName) {
      alert('Customer name is required.');
      return;
    }

    const updatedBooking = {
      ...selectedBooking,
      customerName,
      paymentMethod,
    };

    updateBooking(updatedBooking);
    alert('Booking updated successfully!');
    setSelectedBooking(null); // alert and clears form 
  };

  return (
    <div className="edit-bookings-page">
      <h2>Edit Bookings</h2>
      <div>
        <label>Search by Booking ID:</label>
        <input
          type="text"
          value={searchID}
          onChange={(e) => setSearchID(e.target.value)}
          placeholder="Enter Booking ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {selectedBooking && (
        <div className="edit-form">
          <h3>Edit Booking</h3>
          <label>
            Customer Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </label>
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
          <button onClick={handleSave}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default EditBookingsPage;