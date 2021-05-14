import React, { useRef, useState } from 'react'
import { Nav, Navbar, Overlay } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import './TopNavBar.css'

export default function TopNavBar() {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false);
    const target = useRef(null);
    const handleServiceOpen = () =>{
        setShow(true)
    }
    const handleServiceClose = () =>{
        setShow(false)
       
    }
    const activeLink = () =>{
        setActive(!active)
    }
    return (
        <div>
            <Navbar className='top_nav_bar' collapseOnSelect fixed='top' expand="lg" bg="light" variant="light">
                <Navbar.Brand  as={Link} to='/' className='top_nav_brand'>Samudayah Technologies</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto top_nav_nav ">
                    <NavLink activeClassName='top_nav_active_links' exact to='/' as={Link} className='top_nav_links'>Home</NavLink>
                    <NavLink className='top_nav_links'
                    activeClassName='top_nav_active_links'
                    as={Link}
                    to='/services'
                    ref={target}
                    onMouseLeave={ ()=> { setTimeout(()=>{handleServiceClose()},5000)} }
                    onMouseOver={handleServiceOpen}
                    >
                        Services
                            <Overlay target={target.current} show={show} placement="bottom">
                           <div className='top_nav_service_overlay' >                            
                            <Nav>
                            <Nav.Link onClick={activeLink} as={Link} to='/web/development' className= 'top_nav_bar_link' >
                                Web Developement
                            </Nav.Link>
                            <Nav.Link as={Link} to='/mobile/development'  className='top_nav_bar_link' >
                                Mobile Application  
                            </Nav.Link>
                            <Nav.Link as={Link} to='/digital/marketing' className='top_nav_bar_link' > Digital Marketing </Nav.Link>
                            </Nav>
                            </div>

                            </Overlay>
                    </NavLink>
                    <NavLink activeClassName='top_nav_active_links' as={Link} to='/our/work' className='top_nav_links'>Our Team</NavLink>
                    <NavLink activeClassName='top_nav_active_links' as={Link} to='/about' className='top_nav_links' >About Us</NavLink>
                    <NavLink activeClassName='top_nav_active_links' as={Link} to='/contact' className='top_nav_links' >Contact Us</NavLink>
                </Nav>
                 </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
