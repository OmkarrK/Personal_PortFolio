import React from 'react'
import '../style/Home.css'

import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../images/mylogo.png'


function Header() {
  return (
    <Navbar className='navbar' expand='lg'>
        <Container>
            <Navbar.Brand as={Link} to='/'><img src={logo} style={{height:'100px', width:'100px', borderRadius:'20%'}}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>            </Navbar.Toggle>

            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='link mr-auto nav'>
                    <Nav.Link as={Link} to='/' className='nav-text text-white' >Home</Nav.Link>
                    <Nav.Link as={Link} to='about' className='nav-text text-white'>About</Nav.Link>
                    <Nav.Link as={Link} to='education' className='nav-text text-white'>Education</Nav.Link>
                    <Nav.Link as={Link} to='projects' className='nav-text text-white'>Projects</Nav.Link>
                    <Nav.Link as={Link} to='contact' className='nav-text text-white'>Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header