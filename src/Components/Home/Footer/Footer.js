import React from 'react'
import {  Container, Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
export const Footer = () => {
    return (
       <section className="footer-side">
       <Container>
       <Row className="jutify-content-center">
       <Col lg={6}>
       <h3>LINKS</h3>
       <ul>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
       </ul>
       </Col>
       <Col lg={6} className="ml-auto">
      <h3> FOLLOW US</h3>
       <FontAwesomeIcon icon={faFacebookF} />
       <FontAwesomeIcon icon={faTwitter} />
       <FontAwesomeIcon icon={faLinkedinIn} />
       </Col>
       </Row>
       <p style={{marginTop:'50px',borderTop:'2px solid #707070',paddingTop:'10px'}}> &copy; {new Date().getFullYear()} Copyright:</p>
       </Container>
       </section>
    )
}
