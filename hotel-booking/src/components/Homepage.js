import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../style/HomePage.css';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#">SuiteSpot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#rooms">Rooms</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner */}
      <div className="banner">
        {/* Add your banner image or text */}
      </div>

      {/* Description Section */}
      <div className="container">
        <h2>Welcome to SuiteSpot</h2>
        <p>
          Experience luxury and comfort at our hotel. We offer a variety of rooms and top-notch
          services to make your stay unforgettable. Book with us today and enjoy a seamless experience!
        </p>
      </div>
    </div>
  );
};

export default HomePage;