import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './DigitalMarketing.css'

export default function DigitalMarketing() {
    return (
        <Container className='digital_market_container' >
            <Row className='apta_services_row_text_digital'>
                <Col> <span className='services_apta_service_text'> Digital Marketing </span> </Col>

            </Row>
            <Row className='apta_services_row_text' >
                <Col xl={10} className='apta_services_col_text' >
                    <p>
                        Apta's services are designed to support the world’s most sophisticated asset managers. Offered as individual products, a series of fully integrated modules, or as a comprehensive platform, each solution is highly customizable to meet our clients’ needs, for both today and tomorrow.
                    </p>
                </Col>
            </Row>
            <Row className='apta_service_row_cards_digital'>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Card className='service_card3' >
                        <Card.Body>
                            <Card.Title className='service_card_title'>Digital Marketing</Card.Title>
                            <Card.Text className='service_card_text'>
                                <Col xl={12} >
                                    At Ariscent provides digital Marketing that focuses on growing business success.
                                </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
