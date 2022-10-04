import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    return (
        <Navbar bg="Secondary" expand="lg">
            <Container>
                
                <Navbar.Brand className='bg-secondary px-3 rounded' href="#home">
                    <FontAwesomeIcon icon="fa-solid fa-house" /> React Router With Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className='btn btn-outline-success my-sm-3' href="#">
                        <FontAwesomeIcon icon="fa-solid fa-check" /> <i class="fass fa-xmark"></i>Home</Nav.Link>
              
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;