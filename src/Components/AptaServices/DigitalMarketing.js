import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './DigitalMarketing.css'
import SeoIcon from '../../Utils/Icons/seo.svg'
import EmailIcon from '../../Utils/Icons/email.svg'
import SmsIcon from '../../Utils/Icons/sms.svg'
import GoogleIcon from '../../Utils/Icons/google.svg'
import SocialIcon from '../../Utils/Icons/social-media.svg'
import DigiIcon from '../../Utils/Icons/dig-market.svg'


export default function DigitalMarketing() {
    return (
        <Container fluid className='digital_market_container' >
            <Row className='digital_market_row'>
                {/* <Col className='digital_market_col'> <div className='digital_market_col_span'> Digital Marketing </div>  </Col> */}
            </Row>
            <Row>
                <Col className='digital_market_col2'> Digital Marketing is a commitment, not a campaign.</Col>
            </Row>
            <Row className='digital_market_row1' >
                <Col className='digital_market_col3' xl={3} sm={11} xs={11} >
                <div>
                <img src={SocialIcon} alt='Loading..' className='digital_market_icon' /> <br />
                <span className='digital_market_text_span' >Social media Optimization</span>
                <p className='digital_market_text_p' > SMO is a powerful strategy that connects social media networks such as Facebook, Twitter or Instagram with which you can enjoy a strong presence on the web by obtaining an Internet authority for your business. Offers the opportunity to get in touch with a niche audience. </p>
                </div>
                </Col>

                <Col className='digital_market_col3' xl={3} sm={11} xs={11}>
                <img src={SeoIcon} alt='Loading..' className='digital_market_icon' /> <br />
                <span className='digital_market_text_span' >Search Engine Optimization</span>
                <p className='digital_market_text_p' > SEO is the process that leads to a better user experience, for better ranking and visibility of your company website in the search engine results and helps you increase sales and get higher returns on your investments. </p>
                </Col>

                <Col className='digital_market_col3' xl={3} sm={11} xs={11}>
                <img src={DigiIcon} alt='Loading..' className='digital_market_icon' /> <br />
                <span className='digital_market_text_span' >Affiliate Marketing</span>
                <p className='digital_market_text_p' >Affiliate marketing is a source for generating passive income and helps advertise business products and services. It is a strategy that redirects your contacts from other websites. Affiliate marketing is a process of earn commissions for marketing products from other companies. </p>
                </Col>
            </Row>

            <Row className='digital_market_row1' >
                <Col className='digital_market_col3' xl={3} sm={11} xs={11}>
                <img src={SmsIcon} alt='Loading..' className='digital_market_icon' /> <br />
                <span className='digital_market_text_span' >SMS Marketing</span>
                <p className='digital_market_text_p' > Sending bulk SMS is one of the marketing strategies with a professional way to increase the target audience with interesting offers and affordable prices to get more requests for the company. </p>
                </Col>

                <Col className='digital_market_col3' xl={3} sm={11} xs={11}>
                <img src={GoogleIcon} alt='Loading..' className='digital_market_icon' /> <br />
                <span className='digital_market_text_span' >Google My Business</span>
                <p className='digital_market_text_p' > Google My Business is a free and easy-to-use tool that allows companies to manage their online presence with a local business page on Google, in Search and Maps. Helps verify and modify company information, which allows your customers to know your company history. </p>
                </Col>
                
                <Col className='digital_market_col3' xl={3} sm={11} xs={11}>
                <img src={EmailIcon} alt='Loading..' className='digital_market_icon' /> <br />
                <span className='digital_market_text_span' >Email Marketing</span>
                <p className='digital_market_text_p' > Email marketing is the perfect way to attract traffic by sending a commercial message to the customer or to a group of customers using email. It is one of the fastest processes to export & import business details, to obtain leads all over the world. </p>
                </Col>
            </Row>
            
        </Container>
    )
}
