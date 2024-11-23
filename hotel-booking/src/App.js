import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Rooms from './components/Rooms';
import CustomNavbar from './components/Navbar';

const App = () => {
  return (
    <Router>

<CustomNavbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  );
};

export default App;