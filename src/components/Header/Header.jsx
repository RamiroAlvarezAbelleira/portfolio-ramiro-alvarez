import React from 'react'
import './Header.css'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'

const Header = () => {
  return (
    <header className='header'>
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" fixed='top'>
          <Container fluid>
            <Navbar.Brand href="#main" className='primary-text-color'></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='bg-dark'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`} className='primary-text-color'>
                  Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='bg-dark'>
                <Nav>
                  <Nav.Link href="#about-me" className='secondary-text-color'>About me</Nav.Link>
                  <Nav.Link href="#projects" className='secondary-text-color'>Projects</Nav.Link>
                  <Nav.Link href="#skills" className='secondary-text-color'>Skills</Nav.Link>
                  <Nav.Link href="#contact" className='secondary-text-color'>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header
