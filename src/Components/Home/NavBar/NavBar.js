import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'
import './Navbar.css'

export const NavBar = () => {
  const email=localStorage.getItem("email")
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
      {
        email==="shameemsardar84@gmail.com"?<Nav.Link ><Link to="/blog">Write</Link></Nav.Link>:null
      }
      {email&&email!==undefined?<Nav.Link><Link to="/blogShow">Article</Link></Nav.Link>:<Nav.Link ><Link to="/log">Article</Link></Nav.Link>}
      <Nav.Link href="#link">Contact</Nav.Link>
      <Nav.Link ><Link to="/log">Login</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Container>
        </section>
    )
}
