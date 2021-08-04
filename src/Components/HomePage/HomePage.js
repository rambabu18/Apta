import React from 'react'
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import About from '../About/About'
import Service from '../Services/Service'
import './HomePage.css'
import { useHistory } from 'react-router'
import SildeData from '../../Utils/Data/SlideData.json'
import SEO from '../SEO/SEO'

export default function HomePage() {
    const history = useHistory();
    return (
        <>
            <Container fluid className='home_page_container' >
                <SEO title = "Samudayah || Home"/>
                <Row>
                    <Carousel style={{width:"100%"}} >
                        {
                            SildeData.map((data) => (
                                <Carousel.Item>
                                    <Image className="carousel_slide1" src={data.backgroundImage} alt="First slide" />
                                    <Carousel.Caption>
                                        <h3 className='home_page_text'> {data.title} </h3>
                                        <h3 className='home_page_text1'> {data.title_one} </h3>
                                        <h3 className='home_page_text2'> {data.title_two} </h3>
                                        <Button onClick={() => history.push('/about')} className='home_page_btn'> {data.button_name} </Button>
                                        <p> {data.des} </p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            ))
                        }
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
        </>
    )
}
