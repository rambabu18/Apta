import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Service from '../Services/Service'
import './HomePage.css'
import Slide1 from '../../Utils/Images/p-374870.jpg'
import Slide4 from '../../Utils/Images/budha.jpg'
import Slide2 from '../../Utils/Images/p-712786.jpg'
import Slide3 from '../../Utils/Images/p-7974.jpg'
import { useHistory } from 'react-router'

export default function HomePage() {
    const history = useHistory();
    return (
        <>
            <Container fluid className='home_page_container' >
                <Row>
                <Carousel >
                    <Carousel.Item>
                        <img  className="carousel_slide1"  src={Slide1} alt="First slide"  />
                        <Carousel.Caption>
                            <h3 className='home_page_text'> Welcome to Samudayah</h3>
                            <h3 className='home_page_text1'>WE KEEP TECHNOLOGY</h3>
                            <h3 className='home_page_text2'>SIMPLE AND ACCURATE</h3>
                            <Button onClick={()=>history.push('/about')} className='home_page_btn'>Explore more</Button>
                            <p>“We love creative and design with passion of building epic web experiences to blow people's minds.”</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  className="carousel_slide1"  src={Slide4} alt="Loading.."  />
                        <Carousel.Caption>
                            <h3 className='home_page_text'>Samudayah is a young and energetic organization providing web based solutions.</h3>
                            <h3 className='home_page_text1'>WE KEEP TECHNOLOGY</h3>
                            <h3 className='home_page_text2'>SIMPLE AND ACCURATE</h3>
                            <Button onClick={()=>history.push('/about')} className='home_page_btn'>Explore more</Button>
                            <p>“We love creative and design with passion of building epic web experiences to blow people's minds.”</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel_slide1"  src={Slide2}  alt="Second slide" />
                        <Carousel.Caption>
                        <h3 className='home_page_text'> Digital Marketing</h3>
                            <h3 className='home_page_text1'>WE KEEP TECHNOLOGY</h3>
                            <h3 className='home_page_text2'>SIMPLE AND ACCURATE</h3>
                            <Button onClick={()=>history.push('/digital/marketing')} className='home_page_btn'>Explore more</Button>
                            <p>“Google Analytics is the best friend of all Digital Marketers as it dictates the decision making and success of every websites.”</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  className="carousel_slide1"  src={Slide3}  alt="Third slide"  />
                        <Carousel.Caption>
                        <h3 className='home_page_text3'>Web & Mobile Development</h3>
                            <h3 className='home_page_text1'>WE KEEP TECHNOLOGY</h3>
                            <h3 className='home_page_text2'>SIMPLE AND ACCURATE</h3>
                            <Button onClick={()=>history.push('/web/development')} className='home_page_btn'>Explore more</Button>
                            <p>“Your website should generate content without trying to guess what might go down well in search engines. Feed the real interest in your topic from the readers of your website to the topic and control the traffic on this topic.”</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Row>
            </Container>
            <Container className='home_page_about_container' fluid>
                <Row>
                    <Col>
                        <About />
                    </Col>
                </Row>
            </Container>
            
            <Container className='home_page_service_container' fluid>
                <Row>
                    <Col>
                        <Service />
                    </Col>
                </Row>
            </Container>
            {/* <Container className='home_page_footer_container' fluid>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container> */}
            {/* <Container className='home_page_container2' fluid>
                <Row>
                    <Col>
                        <About />
                    </Col>
                </Row>
            </Container>
            <Container className='home_page_container3' fluid>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container> */}

        </>
    )
}
