import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Navbar.css'

export const NavBar = () => {
    return (
        <section>
        <Container>
        <Navbar className="navbar" expand="lg">
  <Navbar.Brand href="#home">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Container>
        </section>
    )
}
