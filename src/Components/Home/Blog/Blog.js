import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { NavBar } from '../NavBar/NavBar'
import './Blog.css'
export const Blog = () => {
    return (
        <section>
        <NavBar/>
        <Container >
       
        <Row className="justify-content-center">
        <Col lg={10}>
        <div className="blog">
        <textarea placeholder="Write your Post"></textarea>
        </div>
        <button className="text-right">Post</button>
        </Col>
        </Row>
        </Container>
        </section>
    )
}
