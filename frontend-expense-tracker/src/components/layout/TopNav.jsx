import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // to avoid reloading the page when switching pages from login to register or vice versa
import { LinkContainer } from "react-router-bootstrap"; // after using Link above, you might see a underline in the login and register link | this avoidds that

export const TopNav = () => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="/">ET</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
