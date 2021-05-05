import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <Container fluid className='contact_container' >
            <Row className='contact_row_bg' >
            </Row>
            <Row className='contact_row_text' >
                <Col className='contact_col_text' > Contact Us </Col>
            </Row>
            <Row>
                <Col className='contact_col_text1' >  Have more questions? Feel free to reach out to us.  </Col>

            </Row>
            <Row className='contact_row_form' >
                <Col className='contact_col_form' xl={6} >
                    <Form>
                        <Form.Group as={Col} xl={8} controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name"/>
                        </Form.Group>
                        <Form.Group as={Col} xl={8} controlId="formBasicPassword">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="Company Name" />
                        </Form.Group>
                        <Form.Group as={Col} xl={8} controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email" />
                        </Form.Group>
                        <Form.Group as={Col} xl={8} controlId="formBasicPassword">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter Your Message" />
                        </Form.Group>
                        <Button className='contact_form_btn' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xl={4} >
                   <Row className='contact_row_location' >
                    <Col xl={6} >
                    <h3 className='contact_location_text1'>Location</h3>
                    <h5 className='contact_location_text2' >H No 357 Hmt Hills</h5>
                    <h5 className='contact_location_text2'> Jntu Kukatpally Hyderabad</h5>
                    <h6 className='contact_location_text2'>Telangana, India 500072</h6>
                    </Col>
                   </Row>
                   <Row>
                    <Col xl={4} >
                    <h3 className='contact_location_text1'>Contact Us</h3>
                    <h6 className='contact_location_text2'>9848032919</h6>
                    <h6 className='contact_location_text2'>apta@gmail.com</h6>
                    </Col>
                   </Row>
                </Col>
            </Row>
        </Container>
    )
}
