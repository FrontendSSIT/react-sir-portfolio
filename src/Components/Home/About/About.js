import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import aboutImg from '../../../images/PortfollioImg.jpg'
import './About.css'
export const About = () => {
    return (
       <section className="about">
       <Container>
       <h2>About Me</h2>
       <Row className="justify-content-center">
        <Col lg={6}>
        <div>
        <h5>
Advocate Shameem Sardar is a regular practicing lawyer of the Supreme Court of Bangladesh. After enrolment he joined to Dhaka Bar Association and starting practice in Dhaka Judge Court. During his practice in Dhaka Bar Association he conducted many cases in which Pilkhana murder case, Unipay case, Destiny case, Hall mark case in maintainable. After getting permission in 2012 to practice before the high court division of the Supreme court in Bangladesh. He started to practice before the high court division. As both side practitionery he conduct many more civil, criminal read, company, additional etc cases before the high court division. Advocate Shameem Sardar was an elected executive member if the Bangladesh Supreme Court Bar Association for the season 2019-2020.   
        </h5>
        </div>
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
