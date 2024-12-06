import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import AccountsList from './components/AccountsList';
import HomePage from './components/Homepage';
import CustomNavbar from './components/Navbar';
import BookingPage from './components/BookingPage';
import MyBookings from './components/MyBookings';
import PaymentPage from './components/PaymentPage';
import Login from './components/LoginPage';
import Register from './components/Register';
import EditBookingsPage from './components/EditBookingsPage';
import ReservationList from './components/ReservationList';
import CheckedList from './components/CheckedList';

const App = () => {
  // State to manage registered accounts
  const [accounts, setAccounts] = useState([
    { name: 'John Doe', email: 'john@example.com', password: '123456', role: 'customer' },
    { name: 'Jane Smith', email: 'jane@example.com', password: 'password', role: 'concierge' },
    { name: 'Admin User', email: 'admin@example.com', password: 'adminpass', role: 'admin' },
  ]);

  const [checkedinList, setCheckedinList] = useState([]); // New state for checked-in bookings

  const addCheckedinBooking = (booking) => {
    setCheckedinList((prev) => [...prev, booking]);
  };


  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to add a new account
  const addAccount = (account) => {
    setAccounts((prevAccounts) => [...prevAccounts, account]);
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedInUser(null);

  };

  return (
    <BookingProvider>
      <Router>
        <CustomNavbar loggedInUser={loggedInUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage loggedInUser={loggedInUser} accounts={accounts}/>} />
          <Route path="/edit-bookings-page" element={<EditBookingsPage />} />
          <Route
            path="/book"
            element={<BookingPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} // Pass loggedInUser correctly here
          />
          <Route path="/My-Bookings" element={<MyBookings />} />
          <Route
            path="/payment"
            element={<PaymentPage loggedInUser={loggedInUser} />} // Pass loggedInUser correctly here
          />
          <Route
            path="/login"
            element={<Login accounts={accounts} setLoggedInUser={setLoggedInUser} />}
          />
          <Route
            path="/register"
            element={<Register addAccount={addAccount} />}
          />
          <Route
            path="/accounts-list"
            element={<AccountsList accounts={accounts} setAccounts={setAccounts} />}
          />
          <Route
            path="/booked-reservations"
            element={<ReservationList addCheckedinBooking={addCheckedinBooking} />}
          />
          <Route
            path="/checked-customers"
            element={<CheckedList checkedinList={checkedinList} setCheckedinList={setCheckedinList} />}
          />
        </Routes>
      </Router>
    </BookingProvider>
  );
};

export default App;
