import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [checkedinList, setCheckedinList] = useState([]); // New state for checked-in bookings

  // Function for new booking
  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  // Function to add booking to checked-in list
  const addCheckedinBooking = (booking) => {
    setCheckedinList((prevCheckedinList) => [...prevCheckedinList, booking]);
  };

  // Function to remove booking from checked-in list
  const removeCheckedinBooking = (bookingID) => {
    setCheckedinList((prevCheckedinList) =>
      prevCheckedinList.filter((booking) => booking.bookingID !== bookingID)
    );
  };

  // Function to delete booking by ID from bookings list
  const deleteBooking = (bookingID) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.bookingID !== bookingID)
    );
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        checkedinList,
        addBooking,
        addCheckedinBooking,
        removeCheckedinBooking,
        deleteBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  return useContext(BookingContext);
};
