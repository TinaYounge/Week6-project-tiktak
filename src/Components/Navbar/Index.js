import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import "./Style.css";
const NavbarTiktak = () => {
  return (
    <>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">TikTak</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/products">All Products</Nav.Link>
              <Nav.Link href="./Register">Register</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default NavbarTiktak;
