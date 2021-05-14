import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './WebDevelopment.css'
import ControlIcon from '../../Utils/Icons/controllers.svg'
import PencilIcon from '../../Utils/Icons/pencil.svg'
import CmsIcon from '../../Utils/Icons/cms.svg'
import StatsIcon from '../../Utils/Icons/stats.svg'
import MenuIcon from '../../Utils/Icons/menu1.svg'
import ResponseIcon from '../../Utils/Icons/responsive.svg'


export default function WebDevelopment() {
    return (
        <Container fluid className='web_development_container' >
            <Row className='web_development_row'>
                <Col xl={12}> <span className='web_development_col_text'> <div className='web_development_col_span'> Web Design and Development </div> </span> </Col>
                {/* <Col xl={12} className='web_development_col_text1'>  We don't just build websites, we build websites that SELLS </Col> */}
            </Row>
            <Row>
                <Col className='web_development_col1_text'> Web design is not just about creating pretty layouts.<br /> It’s about understanding the marketing challenge behind your business. </Col>
            </Row>
            <Row className='web_development_row1'>
                <Col className='web_development_col2' xl={3} >
                    <img className='web_development_setting_icon' src={ResponseIcon} alt='Loading..' /> <br />
                    <span className='web_development_text_span' >Responsive Web Design</span>
                    <p className='web_development_text_p' > A responsive web design is a single website that can expand or contract to fit the size of the screen. </p>
                </Col>
                <Col className='web_development_col2' xl={3} >
                    <img className='web_development_setting_icon' src={MenuIcon} alt='Loading..' /> <br />
                    <span className='web_development_text_span' >Award Winning Web Design</span>
                    <p className='web_development_text_p' > We design encompasses many different skills and disciplines in the production and maintenance of websites. </p>
                </Col>
                <Col className='web_development_col2' xl={3} >
                    <img className='web_development_setting_icon' src={ControlIcon} alt='Loading..' /> <br />
                    <span className='web_development_text_span' >WEB APP SUPPORT & MAINTENANCE</span>
                    <p className='web_development_text_p' >We ensure that your software stays alive and relevant by providing a comprehensive web app support and maintenance services. </p>
                </Col>
            </Row>
            <Row className='web_development_row1'>
                <Col className='web_development_col2' xl={3} >
                    <img className='web_development_setting_icon' src={StatsIcon} alt='Loading..' /> <br />
                    <span className='web_development_text_span' >Built-in SEO Best Practices</span>
                    <p className='web_development_text_p' > We’ve worked with many clients and have made this checklist as a resource to help you make sure your online marketing. </p>
                </Col>
                <Col className='web_development_col2' xl={3} >
                    <img className='web_development_setting_icon' src={PencilIcon} alt='Loading..' /> <br />
                    <span className='web_development_text_span' >eCommerce Development</span>
                    <p className='web_development_text_p' > Sell products and collect payment on the web with an eCommerce website. Vital’s custom eCommerce web solutions come in all sizes. </p>
                </Col>
                <Col className='web_development_col2' xl={3} >
                    <img className='web_development_setting_icon' src={CmsIcon} alt='Loading..' /> <br />
                    <span className='web_development_text_span' >Easy to use CMS</span>
                    <p className='web_development_text_p' > A Content Management System is software that is used for creating, managing and editing a website. </p>
                </Col>
            </Row>
        </Container>
    )
}
