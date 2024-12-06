import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import HomePage from './components/Homepage';
import CustomNavbar from './components/Navbar';
import BookingPage from './components/BookingPage';
import AvailableBookings from './components/AvailableBookings';
import PaymentPage from './components/PaymentPage'; 
import Login from './components/LoginPage';
import Register from './components/Register';
import EditBookingsPage from './components/EditBookingsPage';
import AccountList from './components/AccountsList';

const App = () => {
  // State to manage registered accounts
  const [accounts, setAccounts] = useState([]);

  // State to track the currently logged-in user
  const [loggedInUser, setLoggedInUser] = useState([]);

  // Function to add a new account
  const addAccount = (account) => {
    setAccounts((prevAccounts) => [...prevAccounts, account]);
  };

  // Function to handle login
  const handleLogin = (username) => {
    const user = accounts.find((account) => account.username === username);
    if (user) {
      setLoggedInUser(user);
    }
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
          <Route path="/" element={<HomePage />} />
          <Route path="/edit-bookings-page" element={<EditBookingsPage />} />
          <Route 
            path="/book" 
            element={<BookingPage loggedInUser={accounts} />} 
          />
          <Route path="/available-bookings" element={<AvailableBookings />} />
          <Route path="/payment" element={<PaymentPage />} /> 
          <Route 
            path="/login" 
            element={<Login accounts={accounts} onLogin={handleLogin} />} 
          />
          <Route 
            path="/register" 
            element={<Register addAccount={addAccount} />} 
          />
          <Route 
            path="/accountlist" 
            element={<AccountList accounts={accounts} />} 
          />
        </Routes>
      </Router>
    </BookingProvider>
  );
};

export default App;
