import React from "react";
import logo from "./../../../Images/logo2.png";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {

  const {logOut} = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Cart</Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign up
            </Nav.Link>
            <Nav.Link onClick={logOut}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
