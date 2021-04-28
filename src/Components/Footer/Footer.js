import React from 'react'
import { Nav } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
    return (
        <> 
        <div>
            <span className='top_nav_brand' > Apta IT Solutions </span>
        </div>
            <Nav className='footer_nav' defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Careers</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
                </Nav.Item>
            </Nav>
           <span className='footer_text_rights' > All Rights Are Reserved.... </span> 
        </>
    )
}
