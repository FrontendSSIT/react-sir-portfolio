import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { NavBar } from '../NavBar/NavBar'
import './Header.css'
export const Header = () => {
    return (
       <section className="headers-bg">
       <NavBar />
       <Container className="slider-banner">
    
      <Row className="jutify-content-center">
      <Col lg={12}>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>1</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Third slide"
    />
  
    <Carousel.Caption >
      <h3 style={{color:'red'}}>3</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </Col>
      </Row>
       </Container>
       </section>
    )
}
