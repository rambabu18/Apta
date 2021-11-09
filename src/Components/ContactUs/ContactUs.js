import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import './ContactUs.css'
import CallIcon from '../../Utils/Icons/phone-call.svg'
import EmailIcon from '../../Utils/Icons/email1.svg'
import SEO from '../SEO/SEO'

export default function ContactUs() {
    return (
        <Container fluid className='contact_container' >
            <SEO title = "Samudayah || Contact"/>
            <Row className='contact_row_bg' >
            </Row>
            <Row className='contact_row_text' >
                <Col className='contact_col_text' > Contact Us </Col>
            </Row>
            <Row>
                <Col className='contact_col_text1' >  For any Queries,Feel free to reach out to us. </Col>

            </Row>
            <Row className='contact_row_location' >
                <Col xl={5} lg={4} md={5} sm={6} xs={6} >
                    <h3 className='contact_location_text1'> Location</h3>
                    <h5 className='contact_location_text2'> Kukatpally, HYD</h5>
                    <h6 className='contact_location_text2'>Telangana, India</h6>
                </Col>
                <Col xl={4} lg={5} md={5} sm={6} xs={6} >
                    <h3 className='contact_location_text1'>Location</h3>
                    <h5 className='contact_location_text2'> Mississauga, GTA</h5>
                    <h6 className='contact_location_text2'>Ontario, Canada</h6>
                </Col>
            </Row>
            <Row className='contact_row_location' >
                <Col xl={5} lg={4} md={5} sm={6} xs={6} >
                    <h3 className='contact_location_text1'>Contact Us</h3>
                    <h6 className='contact_location_text2'> <Image className='contact_us_icon' src={CallIcon} alt='Loading..' /> +917386211139</h6>
                    <h6 className='contact_location_text3'>  <Image className='contact_us_icon' src={EmailIcon} alt='Loading..' />info@samudayah.com</h6>
                </Col>
                <Col xl={4} lg={5} md={5} sm={6} xs={6} >
                    <h3 className='contact_location_text1'>Contact Us</h3>
                    <h6 className='contact_location_text2'> <Image className='contact_us_icon' src={CallIcon} alt='Loading..' /> +14168796277</h6>
                    <h6 className='contact_location_text3'> <Image className='contact_us_icon' src={EmailIcon} alt='Loading..' />info@samudayah.com</h6>
                </Col>
            </Row>
            <Row className='contact_row_form' >
                <Col className='contact_col_form' xl={9} lg={10} md={11} >
                    <Form >
                        <Form.Group as={Col} xl={8} controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group as={Col} xl={8} controlId="formBasicPassword">
                            <Form.Label>Company</Form.Label>
                            <Form.Control required type="text" placeholder="Company Name" />
                        </Form.Group>
                        <Form.Group as={Col} xl={8} controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter Your Email" />
                        </Form.Group>
                        <Form.Group as={Col} xl={8} controlId="formBasicPassword">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control required as="textarea" placeholder="Enter Your Message" />
                        </Form.Group>
                        <Col className="contact_col_btn" xl={8} >
                        <Button className='contact_form_btn' variant="primary" type="submit">
                            Submit
                        </Button>
                        </Col>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}
