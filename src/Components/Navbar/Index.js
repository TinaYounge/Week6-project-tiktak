import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Style.css";
const NavbarTiktak = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">TikTak</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/products">All Products</Nav.Link>
            <Nav.Link href="./cart">Cart</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item className="hover" href="./Register">
                Register
              </NavDropdown.Item>
              <NavDropdown.Item className="hover" href="./Login">
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTiktak;
