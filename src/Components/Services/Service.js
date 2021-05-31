import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import './Services.css'

export default function Service() {
    const history = useHistory();

    return (
        <Container className='service_container' >
            <Row>
                <Col>
                    <span className='services_our_service_text'> Samudayah Services </span>
                </Col>
            </Row>
            <Row className='service_row_cards' >
                <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Card onClick={() => history.push('/services')} className='service_card' >
                        <Card.Body>
                            <Card.Title className='service_card_title' > The Samudayah </Card.Title>
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
            <Row className='service_row_cards1' >
                <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                    <Card onClick={() => history.push('/services/mobile')} className='service_card1'>
                        <Card.Body>
                            <Card.Title className='service_card_title'>Mobile Developement</Card.Title>
                            <Card.Text className='service_card_text'>
                                <Col className='service_card_text_col' xl={12} >
                                    Right from strategy to app design and development services to testing and deployment, we adhere to proven global standards and methodology to deliver enterprise-grade applications.
                              </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                    <Card onClick={() => history.push('/services/web')} className='service_card2' >
                        <Card.Body>
                            <Card.Title className='service_card_title'>Web Developement</Card.Title>
                            <Card.Text className='service_card_text'>
                                <Col className='service_card_text_col' xl={12} >
                                    Web Applications are becoming a standard way of delivering solutions to provide timely information and methods of processing data using a range of devices and platforms.
                                </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='service_row_cards2'>
                <Col onClick={() => history.push('/services/digital')} xl={6} lg={6} md={6} sm={12} xs={12} >
                    <Card className='service_card3' >
                        <Card.Body>
                            <Card.Title className='service_card_title'>Digital Marketing</Card.Title>
                            <Card.Text className='service_card_text'>
                                <Col className='service_card_text_col' xl={12} >
                                    Samudayah provides digital Marketing that focuses on growing business success.
                                </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col onClick={() => history.push('/services/content')} xl={6} lg={6} md={6} sm={12} xs={12} >
                    <Card className='service_card4' >
                        <Card.Body>
                            <Card.Title className='service_card_title'>Content Writing</Card.Title>
                            <Card.Text className='service_card_text'>
                                <Col className='service_card_text_col' xl={12} >
                                    Use our platform to create high-quality content along with tools that help you enhance your content and get direct feedback.                                </Col>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
