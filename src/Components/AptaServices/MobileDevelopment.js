import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './MobileDevelopment.css'

export default function MobileDevelopment() {
    return (
        <Container className='mobile_dev_container' >
            <Row className='apta_services_row_text_mobile'>
                <Col> <span className='services_apta_service_text'> Mobile Developement </span> </Col>

            </Row>
            <Row className='apta_services_row_text' >
                <Col xl={10} className='apta_services_col_text' >
                    <p>
                        Apta's services are designed to support the world’s most sophisticated asset managers. Offered as individual products, a series of fully integrated modules, or as a comprehensive platform, each solution is highly customizable to meet our clients’ needs, for both today and tomorrow.
                    </p>
                </Col>
            </Row>
            <Row className='service_row_cards1' >
                <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Card className='service_card1'>
                        <Card.Body>
                            <Card.Title className='service_card_title'>Mobile Developement</Card.Title>
                            <Card.Text className='service_card_text'>
                                <Col xl={12} >
                                    Right from strategy to app design and development services to testing and deployment, we adhere to proven global standards and methodology to deliver enterprise-grade applications.
                              </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
