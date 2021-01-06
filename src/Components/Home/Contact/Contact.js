import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Contact.css'
export const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <Container className="contact-form">
        <Row>
        <Col lg={8}>
    <Row className="justify-content-center">
    <form onSubmit={handleSubmit(onSubmit)}>
     <Col lg={12}>
     <div>  <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} /></div>
     </Col>
     <Col lg={12}>
     <div>  <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} /></div>
     </Col>
     <Col lg={12}>
     <div>  <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} /></div>
     </Col>
     <Col lg={12}>
     <div>  <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} /></div>
     </Col>
     <input type="submit" />
     </form>
   </Row>
        </Col>
        </Row>
        </Container>
    )
}
