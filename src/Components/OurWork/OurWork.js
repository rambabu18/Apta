import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './OurWork.css'
import WebIcon from '../../Utils/Images/20945893.jpg'
import LockIcon from '../../Utils/Icons/padlock.svg'
import FileIcon from '../../Utils/Icons/dig-market.svg'
import WordIcon from '../../Utils/Icons/folder.svg'
import RocketIcon from '../../Utils/Icons/rocket.svg'
import ShieldIcon from '../../Utils/Icons/shield.svg'
import SecurityIcon from '../../Utils/Icons/security.svg'


export default function OurWork() {
    return (
        <Container fluid className='our_work_container' >
            <Row className='our_work_row' >
                <Col className='our_work_col' >
                    <span className='our_work_col_span' >We deliver you <br /> the best Unique <br /> Creative Design </span> <br />
                    <h6 className='our_work_col_span1'>THINK . DESIGN . EXECUTE</h6>
                </Col>
            </Row>
            <Row>
                <Col className='our_work_col_head' >
                    <h6 className='our_work_head_h6' > Security </h6>
                    <h3 className='our_work_head_h3'>Total digital protection</h3>
                </Col>
            </Row>
            <Row className='our_work_row_text1' >
                <img className='our_work_web_icon' src={WebIcon} alt='Loading..' />
                <Col className='our_work_col_web' xl={3} lg={3} md={10} xs={8} sm={8} >
                    <span className='our_work_text_span' >Web Design.</span> <br />
                    <p className='our_work_text_p' > It is good to invest in web design for your business as it creates consistency and the first impression about the brand and customer service and builds trust with the audience. </p>
                </Col>
                <img className='our_work_web_icon' src={LockIcon} alt='Loading..' />
                <Col className='our_work_col_web' xl={3} lg={3} md={10} xs={8} sm={8} >
                    <span className='our_work_text_span'>App Development.</span>
                    <p className='our_work_text_p'>We provide sound communication with the customers. It has the edge of being accessible 24×7 and easy to install and maintain, providing added levels of security. </p>
                </Col>
            </Row>
            <Row className='our_work_row_text1' >
                <img className='our_work_web_icon' src={FileIcon} alt='setting' />
                <Col className='our_work_col_web' xl={3} lg={3} md={10}  xs={8} sm={8} >
                    <span className='our_work_text_span'>Digital Marketing.</span>
                    <p className='our_work_text_p'> Digital marketing gives optimum and measurable search results for your business in generating leads of customers using the social network and lets the business grow competitively. </p>
                </Col>
                <img className='our_work_web_icon' src={WordIcon} alt='Loading..' />
                <Col className='our_work_col_web' xl={3} lg={3} md={10} xs={8} sm={8} >
                    <span className='our_work_text_span'>WordPress Development.</span>
                    <p className='our_work_text_p'> Give your websites with a host of add-on features and flexible plugins that helps you in organizing your content in a cost-effective mobile-friendly way. </p>
                </Col>
            </Row>
            <Row className='our_work_row_text1'>
                <Col xs={12} sm={12} className='our_work_col_head' >
                    <h6 className='our_work_head_h6' > We Are </h6>
                    <h3 className='our_work_head_h3'>Simple yet Powerful</h3>
                </Col>
            </Row>
            <Row className='our_work_row_text2' >
                <Col xl={3} lg={3} xs={12} sm={12} className='our_work_col_icons' > 
                <img className='our_work_secure_icon' src={ShieldIcon} alt='Loading..' />
                <h3>Protection</h3>
                 </Col>
                 <Col xl={3} lg={3} xs={12} sm={12} className='our_work_col_icons1' > 
                <img className='our_work_secure_icon' src={RocketIcon} alt='Loading..'/>
                <h3>Speed</h3>
                 </Col>
                 <Col xl={3} lg={3} xs={12} sm={12} className='our_work_col_icons2' > 
                <img className='our_work_secure_icon' src={SecurityIcon} alt='Loading..'/>
                <h3>Secure</h3>
                 </Col>
            </Row>
            <Row className='our_work_row_text3' >
                <Col xl={6} sm={12} xs={12} className='our_work_col_bg'> 
                </Col>
                <Col className='our_work_col_bg_text' xl={5} >
                  <h3 className='our_work_bg_h3' >Upgrade, Work & Execute Is Our Moto To Create Unique Designs For Websites</h3> <br/>
                  <h6 className='our_work_bg_h6'> Delivering websites with beautiful infographics makes us stand top on the web designing standards</h6>
                  <p className='our_work_bg_p'> <strong>Logo Design:</strong> Techniques, Technologies, Tools... We club the whole to get the best output that our client expects. </p>
                  <p className='our_work_bg_p' > <strong>Responsive Web Design:</strong> Compatibility is the point we keenly focus and our designs are easily adaptable with all the devices. </p>
                  <p className='our_work_bg_p'> <strong>Unique Design:</strong> Our designers deliver unique website & apps designs with the best user functionality in an innovative way. </p>
                  
                </Col>
            </Row>
        </Container>
    )
}
