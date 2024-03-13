import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >
                            <img src={logo} alt='KOLT' style={{ height: '2rem' }} />
                            KOLT
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link >
                                    <FaShoppingCart />&nbsp;Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link >
                                    <FaUser />&nbsp;Sign In
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header