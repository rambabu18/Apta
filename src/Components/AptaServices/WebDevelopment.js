import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './WebDevelopment.css'

export default function WebDevelopment() {
    return (
        <Container className='web_development_container' >
            <Row className='apta_services_row_text_web'>
                <Col> <span className='services_apta_service_text'> Web Developement </span> </Col>

            </Row>
            <Row className='apta_services_row_text' >
                <Col xl={10} className='apta_services_col_text' >
                    <p>
                        Apta's services are designed to support the world’s most sophisticated asset managers. Offered as individual products, a series of fully integrated modules, or as a comprehensive platform, each solution is highly customizable to meet our clients’ needs, for both today and tomorrow.
                    </p>
                </Col>
            </Row>

            <Row className='service_row_cards2' >
                <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Card className='service_card2' >
                        <Card.Body>
                            <Card.Title className='service_card_title'>Web Developement</Card.Title>
                            <Card.Text className='service_card_text'>
                                <Col xl={12} >
                                    Web Applications are becoming a standard way of delivering solutions to provide timely information and methods of processing data using a range of devices and platforms.
                                </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
