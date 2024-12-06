import React from 'react';
import { Navbar, Nav, Container, Button, NavbarBrand } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const CustomNavbar = ({ loggedInUser, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Update the logged-in state
    navigate('/'); // Redirect to the home page
  };

  const renderNavLinks = () => {
    if (!loggedInUser) {
      return (
        <Nav.Link as={Link} to="/"></Nav.Link>
      );
    }

    switch (loggedInUser.role) {
      case 'customer':
        return (
          <>
            <Nav.Link as={Link} to="/book">Book</Nav.Link>
            <Nav.Link as={Link} to="/My-bookings">My Bookings</Nav.Link>
          </>
        );

      case 'concierge':
        return (
          <>
            <Nav.Link as={Link} to="/booked-reservations">Booked Reservations</Nav.Link>
            <Nav.Link as={Link} to="/checked-customers">Checked-in List</Nav.Link>
          </>
        );

      case 'admin':
        return (
          <>
            <Nav.Link as={Link} to="/booked-reservations">Booked Reservations</Nav.Link>
            <Nav.Link as={Link} to="/Accounts-list">Accounts List</Nav.Link>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand as={Link} to="/">Hotel Booking</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{renderNavLinks()}</Nav>
          <Nav>
            {loggedInUser ? (
              <>
                <Navbar.Text className="me-2">Welcome, {loggedInUser.name}</Navbar.Text>
                <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
