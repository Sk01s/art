"use client";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      expand="md"
      fixed="top"
      className="page-transition colors-e background-solid"
      id="top-nav"
    >
      <Container className="">
        <div className="navbar-header">
          <Navbar.Brand href="/" style={{ color: "white" }}>
            Raouf Rifai
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarCollapse" className="menu-toggle">
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarCollapse" className="navbar-collapse">
          <div className="nav navbar-nav navbar-right">
            <Nav.Link href="#home" className="hover-effect d-none d-md-block">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="hover-effect d-none d-md-block">
              About
            </Nav.Link>
            <Nav.Link href="#work" className="hover-effect d-none d-md-block">
              Artwork
            </Nav.Link>
            <Nav.Link href="#book" className="hover-effect d-none d-md-block">
              Book
            </Nav.Link>
            <Nav.Link
              href="#process"
              className="hover-effect d-none d-md-block"
            >
              Process
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="hover-effect d-none d-md-block"
            >
              Contact
            </Nav.Link>
          </div>
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="hover-effect d-md-none">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="hover-effect d-md-none">
              About
            </Nav.Link>
            <Nav.Link href="#work" className="hover-effect d-md-none">
              Artwork
            </Nav.Link>
            <Nav.Link href="#book" className="hover-effect d-md-none">
              Book
            </Nav.Link>
            <Nav.Link href="#process" className="hover-effect d-md-none">
              Process
            </Nav.Link>
            <Nav.Link href="#contact" className="hover-effect d-md-none">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
