import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './AboutUs.css'
import SettingIcon from '../../Utils/Icons/application.svg'
import MenuIcon from '../../Utils/Icons/menu.svg'
import FileIcon from '../../Utils/Icons/image.svg'

export default function AboutUs() {
    return (
        <Container fluid className='about_us_container' >
            <Row className='about_us_row_text' >
                <Col className='about_us_col_text' > <span >About Us</span></Col>
            </Row>
            <Row>
                <Col className='about_us_col_text1' > <span>Apta IT Solutions Private limited is Hyderabad <br/> Based Company</span></Col>
            </Row>
            <Row className='about_us_row_text1' >
                <Col className='about_us_col_text_p' xl={3} > 
                <img className='about_us_setting_icon' src={SettingIcon} alt='setting' /> <br/>
                <span className='about_us_text_span' >Creativity unique Designers.</span> 
                <p className='about_us_text_p' > Combining strategizing skills with design and technology, we at Web apps, create the best-in-class web designs that are effective and impressive with the client's target market. </p>
                </Col>
                <Col className='about_us_col_text_p' xl={3} > 
                <img className='about_us_setting_icon' src={MenuIcon} alt='setting' /> <br/>
                <span className='about_us_text_span'>Technology Coding Experts.</span> 
                <p className='about_us_text_p'>Our team of developers work closely with the customers to analyze, code and execute an entire suite of application with outstanding technical expertise, profound knowledge. </p>
                </Col>
                <Col className='about_us_col_text_p' xl={3} > 
                <img className='about_us_setting_icon' src={FileIcon} alt='setting' /> <br/>
                <span className='about_us_text_span'>Discover Explore More.</span> 
                <p className='about_us_text_p'> Through the use of new, engaging ways of digital marketing, we deliver high-quality solutions that support you in connecting with your clients in ways that you haven't imagined before. </p>
                </Col>
            </Row>
        </Container>
    )
}
