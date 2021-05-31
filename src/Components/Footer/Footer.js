import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import FacebookIcon from '../../Utils/Icons/facebook.svg'
import InstaIcon from '../../Utils/Icons/instagram.svg'
import CallIcon from '../../Utils/Icons/phone-call.svg'
import LocationIcon from '../../Utils/Icons/location.svg'
import LinkedInIcon from '../../Utils/Icons/linkedin.svg'
import { useHistory } from 'react-router'

export default function Footer() {
    const history = useHistory();
    return (
        <Container fluid className='footer_container' >
            <Row className='footer_row'>
                <Col xl={3} lg={3} md={6} sm={6} xs={6} className='footer_text' >
                    <h3 className='footer_text1'>Information</h3>
                    <h5 onClick={() => history.push('/about')} className='footer_text2'> About Us</h5>
                    <h6 className='footer_text2'>Privacy Policy</h6>
                    <h6 onClick={() => history.push('/our/team')} className='footer_text2'>Our Team </h6>
                </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={6} className='footer_text'>
                    <h3 className='footer_text1'>Services</h3>
                    <h6 onClick={() => history.push('/services/web')} className='footer_text2'>Web Development</h6>
                    <h6 onClick={() => history.push('/services/mobile')} className='footer_text2'>Mobile Development</h6>
                    <h6 onClick={() => history.push('/services/digital')} className='footer_text2'>Digital Marketing</h6>
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} xs={6} className='footer_text'>
                    <h3 className='footer_text1'>Support</h3>
                    <h6 onClick={() => history.push('/contact')} className='footer_text2'>Contact Us</h6>
                </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={6} className='footer_text'>
                    <h3 className='footer_text1'>Follow Us</h3>
                    <img className='footer_social_icon' src={FacebookIcon} alt='Loading..' />
                    <img className='footer_social_icon' src={InstaIcon} alt='Loading..' />
                    <img className='footer_social_icon' src={LinkedInIcon} alt='Loading..' />
                </Col>
            </Row>
            <Row className='footer_row1'>
                <Col xl={3} lg={5} md={6} sm={12} xs={12} className='footer_text'> <h6 className='footer_text2'> Copyright © Samudayah Software Company, 2021</h6> </Col>
                <Col xl={3} lg={5} md={6} sm={12} xs={12} className='footer_text'>
                    <h6 className='footer_text2'> <img className='footer_location_icon' src={CallIcon} alt='Loading..' /> Contact:+14168796277,+917386211139</h6>
                </Col>
                <Col xl={3} lg={5} md={6} sm={12} xs={12} className='footer_text'>
                    <h6 className='footer_text2'> <img className='footer_location_icon' src={LocationIcon} alt='Loading..' /> Kukatpally, GHMC Telangana, India</h6>
                </Col>
                <Col xl={3} lg={5} md={6} sm={12} xs={12} className='footer_text'>
                    <h6 className='footer_text2'> <img className='footer_location_icon' src={LocationIcon} alt='Loading..' /> Mississauga, GTA Ontario, Canada</h6>
                </Col>
            </Row>
        </Container>
    )
}
