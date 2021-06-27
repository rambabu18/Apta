import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './MobileDevelopment.css'
import AppleIcon from '../../Utils/Icons/apple.svg'
import AndroidIcon from '../../Utils/Icons/android.svg'
import CrossIcon from '../../Utils/Icons/cross-platform.svg'
import NativeIcon from '../../Utils/Icons/analysis.svg'
import HybridIcon from '../../Utils/Icons/refresh.svg'
import ProgressIcon from '../../Utils/Icons/optimization.svg'
import SEO from '../SEO/SEO'

export default function MobileDevelopment() {
    return (
        <Container fluid className='mobile_dev_container' >
            <SEO title = "Samudayah || Mobile Developement"/>
            <Row className='mobile_dev_row'>
                {/* <Col xl={12} className='mobile_dev_col'> <div className='mobile_dev_col_div'> Mobile Application Developement</div>  </Col> */}
                {/* <Col xl={12} className='mobile_dev_col1' >We offer a full cycle of application design, integration and management services.</Col> */}
            </Row>
            <Row>
                <Col className='mobile_dev_col2'>Mobile App Development Services <br /> For Numerous Platforms</Col>
            </Row>
            <Row className='mobile_dev_row1' >
                <Col className='mobile_dev_col3' xl={3} sm={11} xs={11} >
                    <img src={AppleIcon} alt='Loading..' className='mobile_dev_icon' /> <br />
                    <span className='mobile_dev_text_span' >iOS APP DEVELOPMENT</span>
                    <p className='mobile_dev_text_p' > Enjoying the glory of more than a million app downloads, Terasol has successfully built and delivered amazing iOS apps. With an unmatchable experience that has come from developing iOS apps for a number of industries, we have left our footprint across the world, helping many clients breathe life into their app idea. </p>
                </Col>
                <Col className='mobile_dev_col3' xl={3} sm={11} xs={11} >
                    <img src={AndroidIcon} alt='Loading..' className='mobile_dev_icon' /> <br />
                    <span className='mobile_dev_text_span' >ANDROID APP DEVELOPMENT</span>
                    <p className='mobile_dev_text_p' > Each Android app developed by our team is a product of thorough market analysis, industry research, and latest technology stack. Each Android app by Terasol goes through rigorous quality testing and sets a benchmark for responsiveness, design and pleasant user experience. </p>
                </Col>
                <Col className='mobile_dev_col3' xl={3} sm={11} xs={11} >
                    <img src={CrossIcon} alt='Loading..' className='mobile_dev_icon' /> <br />
                    <span className='mobile_dev_text_span' >CROSS-PLATFORM APPS</span>
                    <p className='mobile_dev_text_p' > Why face technical issues, bugs and vary UX just to widen your reach to your target audiences? Our multi-platform mobile app solutions can provide consistent branding, user familiarity and decrease costs. We use cutting edge technologies like PhoneGap and React Native to create custom apps that provide a sense of belongingness on every platform. </p>
                </Col>
            </Row>
            <Row className='mobile_dev_row1' >
                <Col className='mobile_dev_col3' xl={3} sm={11} xs={11} >
                    <img src={NativeIcon} alt='Loading..' className='mobile_dev_icon' /> <br />
                    <span className='mobile_dev_text_span' >Testing</span>
                    <p className='mobile_dev_text_p' > Our testing offerings involve manual testing, automation- testing, end-end testing, security testing, cross-functional and compatibility testing. In addition to this, we also test the API. </p>
                </Col>
                <Col className='mobile_dev_col3' xl={3} sm={11} xs={11} >
                    <img src={HybridIcon} alt='Loading..' className='mobile_dev_icon' /> <br />
                    <span className='mobile_dev_text_span' >Upgrades</span>
                    <p className='mobile_dev_text_p' > To keep our customers close to the latest market trends we provide upgrade service to transform their applications to the newer and advanced versions of platforms. </p>
                </Col>
                <Col className='mobile_dev_col3' xl={3} sm={11} xs={11} >
                    <img src={ProgressIcon} alt='Loading..' className='mobile_dev_icon' /> <br />
                    <span className='mobile_dev_text_span' >Maintenance</span>
                    <p className='mobile_dev_text_p' > Maintenance is an integral part of our mobile app development services. We offer maintenance services like operational level support, extensions of features, performance enhancements. </p>
                </Col>
            </Row>
        </Container>
    )
}
