import React from 'react';

import '../style/HomePage.css';

const HomePage = () => {
  return (
    <div>
      {/* Banner */}
      <div
      className="banner"
      style={{
        backgroundImage: `url('/images/banner.jpeg')`,
      }}
    >
    </div>

      {/* Description Section */}
      <div className="container">
        <h2>Welcome to SuiteSpot</h2>
        <p>
          Experience luxury and comfort at SuiteSpot. We offer a variety of rooms and top-notch
          services to make your stay unforgettable.
        </p>
      </div>
    </div>
  );
};

export default HomePage;