import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import './OurTeam.css'
import GirlIcon from '../../Utils/Icons/girl.svg'
import MenIcon from '../../Utils/Icons/girl.svg'
import SivaIcon from '../../Utils/Images/Image2.jpeg'
import SunithaIcon1 from '../../Utils/Images/Image1.jpeg'
import RamIcon from '../../Utils/Images/Image3.jpg'
import ShravaniIcon from '../../Utils/Images/Image4.jpg'

export default function OurTeam() {
    return (
        <Container fluid className='our_team_container' >
            <Row className='our_team_row' >
                <Col xl={6} className='our_team_col' >
                    <span className='our_team_col_span' >Our Team </span> <br />
                    <p className='our_team_col_p'>
                        Samudayah combines elegant, cloud-native software with experienced teams of professionals to deliver modern solutions across the investment lifecycle.
                    </p>
                </Col>
            </Row>
            <Row className='our_team_row_p' >
                <Col xl={9} className='our_team_col_p1'  >
                    <p> Building on a platform developed and tested by one of the world's leading investment and technology development firms, the D. E. Shaw group, Samudayah launched as an independent company in 2015. We received additional equity backing from our second seed client, Blackstone Alternative Asset Management, the world's largest discretionary allocator to hedge funds. In January 2020, J.P. Morgan made a strategic investment in the company. </p>
                    <p> Samudayah has grown to support more than $455 billion in assets with a staff of over 1,250 software engineering, accounting, operations, and treasury professionals.</p>
                    <p> The Samudayah team has decades of combined experience in the financial services industry and knows how to meet the needs of our clients, including the requirement to adapt quickly in an ever-changing environment. We help our clients modernize their technology and optimize their organizational footprint so that they can focus on what matters most to their firm.</p>
                </Col>
            </Row>
            <Row className='our_team_row_team' >
                <Col xl={12} className='our_team_row_team_h3' >
                    <h3  >Global Management Team</h3>
                </Col>
                <Col xl={4}>
                    <Figure>
                        <Figure.Image
                            className='our_team_icon'
                            alt="Loading.."
                            src={SivaIcon}
                        />
                        <Figure.Caption>
                            <h3 className='our_team_global_h3' >Siva Kumar</h3>
                            <h6 className='our_team_global_h6'> Managing Director </h6>
                            <h6 className='our_team_global_h6' >(Canada)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4}>
                    <Figure>
                        <Figure.Image
                            className='our_team_icon'
                            alt="Loading.."
                            src={SunithaIcon1}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Sunitha</h6>
                            <h6 className='our_team_global_h6'>Senior Developer </h6>
                            <h6 className='our_team_global_h6'>(Canada)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4}>
                    <Figure>
                        <Figure.Image
                            className='our_team_icon'
                            alt="Loading.."
                            src={ShravaniIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Shravani</h6>
                            <h6 className='our_team_global_h6'> Chief Operating Officer </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4}>
                    <Figure>
                        <Figure.Image
                            className='our_team_icon'
                            alt="Loading.."
                            src={RamIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Rambabu</h6>
                            <h6 className='our_team_global_h6'> Head of Technology </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <Row className='our_team_row_regional_team' >
                <Col xl={12} className='our_team_row_team_h3'> <h3>Regional Leadership</h3>  </Col>
                <Col xl={4} >
                    <Figure>
                        <Figure.Image
                            className='our_team_icon'
                            alt="Loading.."
                            src={ShravaniIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Shravani</h6>
                            <h6 className='our_team_global_h6'> Chief Operating Officer </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xl={4} >
                    <Figure>
                        <Figure.Image
                            className='our_team_icon'
                            alt="Loading.."
                            src={RamIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Rambabu</h6>
                            <h6 className='our_team_global_h6'> Head of Technology </h6>
                            <h6 className='our_team_global_h6'>(India)</h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    )
}
