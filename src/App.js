import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import HomePage from './components/Homepage';
import CustomNavbar from './components/Navbar';
import BookingPage from './components/BookingPage';
import AvailableBookings from './components/AvailableBookings';
import PaymentPage from './components/PaymentPage'; 

const App = () => {
  return (
    <BookingProvider>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/available-bookings" element={<AvailableBookings />} />
          <Route path="/payment" element={<PaymentPage />} /> {/* New Payment Page */}
        </Routes>
      </Router>
    </BookingProvider>
  );
};

export default App;