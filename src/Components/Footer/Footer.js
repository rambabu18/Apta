import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
    return (
        <Container fluid className='footer_container' >
            <Row className='footer_row' >
                <Col xl={4} lg={4} md={4} sm={12} xs={12} className='footer_text' >
                    <h3 className='footer_text1'>Location</h3>
                    {/* <h5 className='footer_text2' >Hmt Hills</h5> */}
                    <h5 className='footer_text2'> Kukatpally Hyderabad</h5>
                    <h6 className='footer_text2'>Telangana, India 500072</h6>
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12} className='footer_text'>
                    <h3 className='footer_text1'>Contact Us</h3>
                    <h6 className='footer_text2'>+919848032919</h6>
                    <h6 className='footer_text2'>apta@gmail.com</h6>
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12} className='footer_text'>
                    <h3 className='footer_text1'>Connect</h3>
                    <h6 className='footer_text2'>Facebook</h6>
                    <h6 className='footer_text2'>LinkedIn</h6>
                </Col>
            </Row>
            <span className='footer_text_rights'> All Rights Are Reserved.... </span>
        </Container>
    )
}
