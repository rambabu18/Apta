import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './AptaServices.css'

export default function AptaServices() {
    return (
        <>
            <Container className='apta_services_container' >
                <Row>
                    <Col> <span className='services_apta_service_text'> Apta Services </span> </Col>

                </Row>
                <Row className='apta_services_row_text' >
                    <Col xl={10} className='apta_services_col_text' >
                        <p>
                            Apta's services are designed to support the world’s most sophisticated asset managers. Offered as individual products, a series of fully integrated modules, or as a comprehensive platform, each solution is highly customizable to meet our clients’ needs, for both today and tomorrow.
                    </p>
                    </Col>
                </Row>
                <Row className='service_row_cards' >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                        <Card className='service_card' >
                            <Card.Body>
                                <Card.Title className='service_card_title' > The Apta </Card.Title>
                                <Card.Title className='service_card_title' > Platform</Card.Title>
                                <Card.Text className='service_card_text'>
                                    <Col className='service_card_text_col' xl={6} xs={12} sm={12} >
                                        A comprehensive and fully integrated technology platform combined with
                                        a team of experienced hedge fund professionals designed to solve the
                                        most complex post-trade challenges of asset managers.
                                </Col>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
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
        </>
    )
}
