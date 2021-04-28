import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Services.css'

export default function Service() {
    return (
        <Container fluid className='service_container' >
            <Row>
                <Col>
                    <span className='services_our_service_text' > Our Services </span>
                </Col>
            </Row>
            <Row className='service_row_cards' >
                <Col>
                    <Card className='service_card' bg='info' border="primary">
                        <Card.Header className='service_card_header'> Web Services</Card.Header>
                        <Card.Body>
                            <Card.Title className='service_card_title' >Web Developement</Card.Title>
                            <Card.Text className='service_card_text'>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='service_card' bg='info' border="primary">
                        <Card.Header className='service_card_header'>Mobile Services</Card.Header>
                        <Card.Body>
                            <Card.Title className='service_card_title'>Mobile Developement</Card.Title>
                            <Card.Text className='service_card_text'>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='service_card' bg='info' border="primary" >
                        <Card.Header className='service_card_header' >IT Services</Card.Header>
                        <Card.Body>
                            <Card.Title className='service_card_title'>IT & Support</Card.Title>
                            <Card.Text className='service_card_text'>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='service_card' bg='info' border="primary" >
                        <Card.Header className='service_card_header'>Other Services</Card.Header>
                        <Card.Body>
                            <Card.Title className='service_card_title'> Testing </Card.Title>
                            <Card.Text className='service_card_text'>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
