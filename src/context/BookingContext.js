import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // function for new booking
  const addBooking = (newBooking) => {
    console.log('Adding booking:', newBooking); 
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  // update booking by ID function
  const updateBooking = (updatedBooking) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.bookingID === updatedBooking.bookingID ? updatedBooking : booking
      )
    );
    console.log('Updated booking:', updatedBooking); // debug
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  return useContext(BookingContext);
};