import React, { useRef, useState } from 'react'
import { Nav, Navbar, Overlay } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './TopNavBar.css'

export default function TopNavBar() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const handleServiceOpen = () =>{
        setShow(true)
    }
    const handleServiceClose = () =>{
        setShow(false)
    }
    return (
        <div>
            <Navbar className='top_nav_bar' collapseOnSelect fixed='top' expand="lg" bg="light" variant="light">
                <Navbar.Brand className='top_nav_brand'>Apta IT Solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
               
                <Nav className="mr-auto top_nav_nav ">
                    <Nav.Link activeClassName='top_nav_active_links' className='top_nav_links' href="#features">Home</Nav.Link>
                    <Nav.Link className='top_nav_links' href="#pricing"
                    ref={target}
                    onMouseLeave={handleServiceClose}
                    onMouseOver={handleServiceOpen}
                    >
                        Services
                            <Overlay target={target.current} show={show} placement="bottom">
                            <Nav className='top_nav_service_overlay' >
                            <Nav.Link as={Link} to='/employees' className='top_nav_bar_link' >
                                Web Developement
                            </Nav.Link>
                            <Nav.Link as={Link} to='/employee/attendance'  className='top_nav_bar_link' >
                                Mobile Application  
                            </Nav.Link>
                            <Nav.Link as={Link} to='/leave/management' className='top_nav_bar_link' > IT & Support </Nav.Link>
                            </Nav>
                            </Overlay>
                    </Nav.Link>
                    <Nav.Link className='top_nav_links' href="#features">Products</Nav.Link>
                    <Nav.Link className='top_nav_links' href="#pricing">About Us</Nav.Link>
                    <Nav.Link className='top_nav_links' href="#pricing">Careers</Nav.Link>
                    <Nav.Link className='top_nav_links' href="#pricing">Contact Us</Nav.Link>

                </Nav>
                 </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
