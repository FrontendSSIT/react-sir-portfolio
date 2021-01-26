import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'
import './Navbar.css'

export const NavBar = () => {
    return (
        <section>
        <Container>
        <Navbar className="navbar" expand="lg">
  <Navbar.Brand href="#home"><img src={logo} alt="" width="60px" height="60px"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link ><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link ><Link to="/blog">Write</Link></Nav.Link>
      <Nav.Link ><Link to="/blogShow">Article</Link></Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Container>
        </section>
    )
}
