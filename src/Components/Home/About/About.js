import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import aboutImg from '../../../images/PortfollioImg.jpg'
import './About.css'
export const About = () => {
    return (
       <section className="about">
       <Container>
       <Row>
        <Col lg={6}>
        <div>Lorem ipsum dolor sit amet, consectetur</div>
        </Col>
        <Col lg={6}>
        <div>
        <img src={aboutImg} alt="" width="100%"/>
        </div>
        </Col>
       </Row>
       </Container>
       </section>
    )
}
