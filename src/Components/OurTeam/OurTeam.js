import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import './OurTeam.css'
import GirlIcon from '../../Utils/Icons/girl.svg'
import MenIcon from '../../Utils/Icons/boss.svg'

export default function OurTeam() {
    return (
        <Container fluid className='our_team_container' >
            <Row className='our_team_row' >
                <Col xl={6} className='our_team_col' >
                    <span className='our_team_col_span' >Our Team </span> <br />
                    <p className='our_team_col_p'>
                        Apta combines elegant, cloud-native software with experienced teams of professionals to deliver modern solutions across the investment lifecycle.
                    </p>
                </Col>
            </Row>
            <Row className='our_team_row_p' >
                <Col xl={9} className='our_team_col_p1'  >
                    <p> Building on a platform developed and tested by one of the world's leading investment and technology development firms, the D. E. Shaw group, Arcesium launched as an independent company in 2015. We received additional equity backing from our second seed client, Blackstone Alternative Asset Management, the world's largest discretionary allocator to hedge funds. In January 2020, J.P. Morgan made a strategic investment in the company. </p>
                    <p> Apta has grown to support more than $455 billion in assets with a staff of over 1,250 software engineering, accounting, operations, and treasury professionals.</p>
                    <p> The Apta team has decades of combined experience in the financial services industry and knows how to meet the needs of our clients, including the requirement to adapt quickly in an ever-changing environment. We help our clients modernize their technology and optimize their organizational footprint so that they can focus on what matters most to their firm.</p>
                </Col>
            </Row>
            <Row className='our_team_row_team' >
                <Col xl={12} className='our_team_row_team_h3' >
                    <h3  >Global Management Team</h3>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Loading.."
                            src={MenIcon}
                        />
                        <Figure.Caption>
                            <h3 className='our_team_global_h3' >Siva Kumar</h3>
                            <h6 className='our_team_global_h6'> Managing Director </h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Loading.."
                            src={GirlIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Shravani</h6>
                            <h6 className='our_team_global_h6'> Chief Operating Officer </h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Loading.."
                            src={MenIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Rambabu</h6>
                            <h6 className='our_team_global_h6'> Head of Technology </h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <Row className='our_team_row_regional_team' >
                <Col xl={12} className='our_team_row_team_h3'> <h3>Regional Leadership</h3>  </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Loading.."
                            src={MenIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Siva Kumar</h6>
                            <h6 className='our_team_global_h6'> Managing Director </h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Loading.."
                            src={GirlIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Shravani</h6>
                            <h6 className='our_team_global_h6'> Chief Operating Officer </h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Loading.."
                            src={MenIcon}
                        />
                        <Figure.Caption>
                            <h6 className='our_team_global_h3'>Rambabu</h6>
                            <h6 className='our_team_global_h6'> Head of Technology </h6>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    )
}
