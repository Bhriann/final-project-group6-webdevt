import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const CustomNavbar = ({ loggedInUser, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">SuiteSpot</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/book">Book a Room</Nav.Link>
            <Nav.Link as={Link} to="/edit-bookings-page">Edit Bookings</Nav.Link>
            <Nav.Link as={Link} to="/available-bookings">Available Bookings</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {loggedInUser ? (
              <>
                <Nav.Link disabled>Welcome, {loggedInUser.name}</Nav.Link>
                <Nav.Link onClick={onLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/accountlist">Account List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
