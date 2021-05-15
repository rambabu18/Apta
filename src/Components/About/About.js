import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

export default function About() {
    return (
        <Container  className='about_container' >
            <Row>
                <Col>
                 <span className='about_text'> A New and Better Way </span>
                </Col>
            </Row>
            <Row>
                <Col xl={10} lg={12} md={12} sm={12} xs={12} >
                <p className='about_text1'>Samudayah is a global financial technology and professional services firm, delivering solutions to some of the world's most sophisticated financial institutions, including hedge funds, banks, and institutional asset managers.</p>
                </Col>
            </Row>
            <Row>
                <Col xl={10} lg={12} md={12} sm={12} xs={12}>
                <p className='about_text1'>Expertly designed to achieve a single source of truth throughout a client's ecosystem, Samudayah's cloud-native technology is built to systematize the most complex tasks.</p>
                </Col>
            </Row>
             <Row>
                <Col xl={10} lg={12} md={12} sm={12} xs={12}>
                <p className='about_text1'>By partnering with us, Samudayah can bring increased efficiency to your organization, freeing team members to focus on higher-level business issues. Unlocking this capacity, Samudayah can empower you to support new strategies, new capital, and new regulatory requirements without increasing headcount or technology spend.</p>
                </Col>
            </Row>
        </Container>
    )
}
