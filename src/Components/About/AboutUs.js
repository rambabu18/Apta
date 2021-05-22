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
                <Col className='about_us_col_text1' > <span>Samudayah Consultancy Services is an Hyderabad <br /> Based Company</span></Col>
            </Row>
            <Row className='about_us_row_p'>
                <Col xl={9} xs={10} className='about_us_col_p'>
                    <p>Samudayah is an Indian Sanskrit word which has the meaning of Rise or Origin. We as team not only rise but also spread rays of aspirations to complex business problems.</p>
                    <p>We have a team of 6 enthusiastic and versatile experienced people in areas like project management, Development, Designing, Architect, Digital Marketing and content writing. We as a team provide IT consultations & services from concept stage to market live and further maintenance.  </p>
                    <p>Samudayah is one stop for all IT related services. We not only develop applications; We also develop good relations with all our customers.  We value their ideas and business to core.</p>
                    <p> We as a team strongly believe sayings of great Mahatma Gandhi on customer service “A customer is the most important visitor on our premises.  He is not dependent on us. We are dependent on him.  He is not an interruption in our work – he is the purpose of it.We are not doing him a favor by serving him. He is doing us a favor by giving us the opportunity to serve him”</p>
                    <p>Samudayah work with a Vision for all our customers.We understand and involve in customer business problems and provide a cost-effective solution. </p>
                    <p>Valuing customer ideas and business to core by providing cost effective solutions.</p>
                </Col>
            </Row>
            <Row className='about_us_row_text1' >
                <Col className='about_us_col_text_p' xl={3} >
                    <img className='about_us_setting_icon' src={SettingIcon} alt='setting' /> <br />
                    <span className='about_us_text_span' >Creativity Unique Designers.</span>
                    <p className='about_us_text_p' > Combining strategizing skills with design and technology, we at Web apps, create the best-in-class web designs that are effective and impressive with the client's target market. </p>
                </Col>
                <Col className='about_us_col_text_p' xl={3} >
                    <img className='about_us_setting_icon' src={MenuIcon} alt='setting' /> <br />
                    <span className='about_us_text_span'>Technology Coding Experts.</span>
                    <p className='about_us_text_p'>Our team of developers work closely with the customers to analyze, code and execute an entire suite of application with outstanding technical expertise, profound knowledge. </p>
                </Col>
                <Col className='about_us_col_text_p' xl={3} >
                    <img className='about_us_setting_icon' src={FileIcon} alt='setting' /> <br />
                    <span className='about_us_text_span'>Discover Explore More.</span>
                    <p className='about_us_text_p'> Through the use of new, engaging ways of digital marketing, we deliver high-quality solutions that support you in connecting with your clients in ways that you haven't imagined before. </p>
                </Col>
            </Row>
        </Container>
    )
}
