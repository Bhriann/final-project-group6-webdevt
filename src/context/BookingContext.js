import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // Function for new booking
  const addBooking = (newBooking) => {
    console.log('Adding booking:', newBooking);
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  // Update booking by ID function
  const updateBooking = (updatedBooking) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.bookingID === updatedBooking.bookingID ? updatedBooking : booking
      )
    );
    console.log('Updated booking:', updatedBooking); // debug
  };

  // Delete booking by ID function
  const deleteBooking = (bookingID) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.bookingID !== bookingID)
    );
    console.log('Deleted booking with ID:', bookingID); // debug
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateBooking, deleteBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  return useContext(BookingContext);
};
