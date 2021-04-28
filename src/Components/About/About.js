import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

export default function About() {
    return (
        <Container fluid className='about_container' >
            <Row>
                <Col>
                 <span className='about_text' > About Us</span>
                </Col>
            </Row>
            <Row>
                <Col>
                <span className='about_text1' >
                  Apta IT Solutions is a leading organization that provides Technology Consulting, HR Consulting and Advanced Learning services in trending technologies.<br/> With over 12 years of experience in the field, we are the technology and recruitment partners of various Government agencies and leading MNCs.
                  <br/> With technology growing at an unstoppable rate,it is now a necessity for the world to grow with it. Our aim is to provide customer-centric <br/> high-quality solutions to bridge the gap between businesses, individuals and technological trends.
                </span>
                </Col>
            </Row>
        </Container>
    )
}
