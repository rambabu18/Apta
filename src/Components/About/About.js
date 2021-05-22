import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

export default function About() {
    return (
        <Container className='about_container' >
            <Row>
                <Col>
                    <span className='about_text'> A New and Better Way </span>
                </Col>
            </Row>
            <Row>
                <Col xl={10} lg={12} md={12} sm={12} xs={12}>
                    <p className='about_text1'>Samudayah is a young and energetic organization providing web based solutions.</p>
                </Col>
            </Row>
            <Row>
                <Col xl={10} lg={12} md={12} sm={12} xs={12} >
                    <p className='about_text1'>Samudayah is a global IT consultation & Services firm operating in two geography locations Canada & India. We make technology simple and accurate for customers use. We deliver apt solutions to medium & small business.</p>
                </Col>
            </Row>
            <Row>
                <Col xl={10} lg={12} md={12} sm={12} xs={12}>
                    <p className='about_text1'>By partnering with us, Samudayah can bring increased efficiency to your organization and simplify your business. Unlocking this capacity, Samudayah can empower you to support new strategies, new capital, and new regulatory requirements without increasing headcount or technology cost.</p>
                </Col>
            </Row>
           
        </Container>
    )
}
