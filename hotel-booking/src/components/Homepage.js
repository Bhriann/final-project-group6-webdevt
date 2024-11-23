import React from 'react';
import '../style/HomePage.css'; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Rooms</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Banner */}
      <div className="banner">
        <h1 className="banner-text">Welcome to Our Hotel</h1>
      </div>

      {/* Description Section */}
      <div className="container">
        <h2>About Us</h2>
        <p>
          Experience luxury and comfort at our hotel. We offer a variety of rooms and top-notch
          services to make your stay unforgettable. Book with us today and enjoy a seamless experience!
        </p>
      </div>
    </div>
  );
};

export default HomePage;