import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ContentWriting.css'
import SeoIcon from '../../Utils/Icons/seo.svg'
import BlogIcon from '../../Utils/Icons/blog.svg'
import DescriptionIcon from '../../Utils/Icons/description.svg'
import WriteIcon from '../../Utils/Icons/write.svg'


export default function ContentWriting() {
    return (
        <div>
            <Container fluid className='content_container'>
                <Row className='content_row'>  </Row>
                <Row>
                    <Col className='content_col2'> “Content builds relationships. Relationships are built on trust.<br /> Trust drives revenue.”</Col>
                </Row>
                <Row className='content_row1' >
                    <Col className='content_col3' xl={3} sm={11} xs={11}>
                        <img src={WriteIcon} alt='Loading..' className='content_icon' /> <br />
                        <span className='content_text_span' >Content Writing</span>
                        <p className='content_text_p' > Providing Content Writing Service is not an easy job to do or, you can't even pick and train a person from a group and make him a Professional Content Writer. Content writing is an art and skill of expressing your heart to the visitors of your website. We will take care of creating Professional Content for your website and do convert your website visitors into your clients.
                         </p>
                    </Col>
                    <Col className='content_col3' xl={3} sm={11} xs={11}>
                        <img src={BlogIcon} alt='Loading..' className='content_icon' /> <br />
                        <span className='content_text_span' >Blog Posts</span>
                        <p className='content_text_p' > Our blog writing services are built to sustain consistency at scale. Using our content management software, custom style guides, and frequent iteration based on feedback, we are able to guarantee a uniform voice and quality level with every blog post. </p>
                    </Col>
                    <Col className='content_col3' xl={3} sm={11} xs={11}>
                        <img src={DescriptionIcon} alt='Loading..' className='content_icon' /> <br />
                        <span className='content_text_span' >Product Descriptions</span>
                        <p className='content_text_p' > Our product description writing services provide e-commerce brands with a streamlined solution for audience-centric, sales-oriented product descriptions. Copywriting for product pages takes industry and SEO expertise, and our vetted writers have both. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
