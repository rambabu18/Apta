import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Service from '../Services/Service'
import './HomePage.css'

export default function HomePage() {
    return (
        <>
        <Container fluid className='home_page_container' >
            <Row>
                <Col>
                 <span className='home_page_welcome' > Welcome, </span>
                </Col>
            </Row>
            <Row>
            <Col className='home_page_text'>
             <span >Apta IT Solutions</span>
            </Col>
            </Row>
            <Row>
            <Col className='home_page_text1'>
             <span> WE KEEP TECHNOLOGY</span>
            </Col>
            </Row>
            <Row>
                <Col className='home_page_text2'>
                <span>  SIMPLE AND ACCURATE </span>
                </Col>
            </Row>
            <Row>
                <Col>
                 <Button className='home_page_btn'>Explore more</Button>
                </Col>
            </Row>
        </Container>
        <Container className='home_page_container1' fluid>
             <Row>
                <Col>
                  <Service/>
                </Col>
            </Row>
        </Container>
        <Container className='home_page_container2' fluid>
            <Row>
                <Col>
                 <About/>
                </Col>
            </Row>
        </Container>
        <Container className='home_page_container3' fluid>
            <Row>
                <Col>
                 <Footer/>
                </Col>
            </Row>
        </Container>

        </>
    )
}
