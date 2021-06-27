import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import './OurTeam.css'
import { TeamData } from '../../Utils/Data/OurTeamData'
import GirlIcon from '../../Utils/Icons/girl.svg'
import SivaIcon from '../../Utils/Images/Image2.jpeg'
import SunithaIcon1 from '../../Utils/Images/Image1.jpeg'
import RamIcon from '../../Utils/Images/Image3.jpg'
import ShravaniIcon from '../../Utils/Images/Image4.jpg'
import SEO from '../SEO/SEO'

export default function OurTeam() {
    return (
        <Container fluid className='our_team_container' >
            <SEO title="Samudayah || Our Team" />
            <Row className='our_team_row' >
                <Col xl={6} md={12} sm={12} xs={12} className='our_team_col' >
                    <span className='our_team_col_span' >Our Team </span> <br />
                    <p className='our_team_col_p'>
                        Samudayah combines elegant, cloud-native software with experience team of professionals to deliver modern solutions across the investment lifecycle.
                    </p>
                </Col>
            </Row>
            <Row className='our_team_row_p' >
                <Col xl={9} className='our_team_col_p1'>
                    <p> Samudayah launched as an independent company in 2021 operating from two geographical locations both from India & Canada.  </p>
                    <p> The Samudayah team has tons of combined experience in the multiple software services and knows how to meet the needs of our customers, including the requirement to adapt quickly in an ever-changing environment. We help our customers modernize their technology and optimize their organizational footprint so that they can focus on what matters most to their company. </p>
                    <p> We provide cost effective solution by our gobal operating model.</p>
                </Col>
            </Row>
            <Row className='our_team_row_team' >
                <Col xl={12} className='our_team_row_team_h3' >
                    <h3  >Global Management Team</h3>
                </Col>
                <Col xl={4}>
                    <Figure>
                        <Figure.Image className='our_team_icon' alt="Loading.." src={SunithaIcon1} />
                        <Figure.Caption>
                            <h3 className='our_team_global_h3' > Sunitha  Kesanapalli </h3>
                            <h6 className='our_team_global_h6'> Managing Director </h6>
                            <h6 className='our_team_global_h6' >(Canada)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4}>
                    <Figure>
                        <Figure.Image className='our_team_icon' alt="Loading.." src={SivaIcon} />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Siva Kumar  Kesanapalli</h6>
                            <h6 className='our_team_global_h6'>Director & Technology Lead   </h6>
                            <h6 className='our_team_global_h6'>(Canada)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4}>
                    <Figure>
                        <Figure.Image className='our_team_icon' alt="Loading.." src={ShravaniIcon} />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Shravani Sista</h6>
                            <h6 className='our_team_global_h6'> Digital Marketing & Operations Manager  </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4}>
                    <Figure>
                        <Figure.Image className='our_team_icon' alt="Loading.." src={RamIcon} />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Rambabu Chennaram</h6>
                            <h6 className='our_team_global_h6'> Technology Operations Manager </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4} >
                    <Figure>
                        <Figure.Image className='our_team_icon' alt="Loading.." src={GirlIcon} />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Prasanna Arikapalli </h6>
                            <h6 className='our_team_global_h6'> Content Writer </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            {/* <Row className='our_team_row_regional_team' >
                <Col xl={12} className='our_team_row_team_h3'> <h3>Regional Leadership</h3>  </Col>
                <Col xl={4} >
                    <Figure>
                        <Figure.Image className='our_team_icon' alt="Loading.." src={ShravaniIcon} />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Shravani Sista</h6>
                            <h6 className='our_team_global_h6'> Digital Marketing & Operations Manager  </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4} >
                    <Figure>
                        <Figure.Image className='our_team_icon' alt="Loading.." src={RamIcon} />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Rambabu Chennaram</h6>
                            <h6 className='our_team_global_h6'> Technology Operations Manager </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4} >
                    <Figure>
                        <Figure.Image className='our_team_icon' alt="Loading.." src={GirlIcon} />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Prasanna Arikapalli </h6>
                            <h6 className='our_team_global_h6'> Content Writer </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row> */}
        </Container>
    )
}
