import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { ReactComponent as ShoppingBag } from '../assets/ShoppingBag.svg'
import { Link } from 'react-router-dom'

function StyledNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">... Clothing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/contact">
                            Contact
                        </Link>
                        {/* <ShoppingBag onMouseEnter width="30px" height="40px" className="cartIcon" /> */}

                        <Link to="/checkout"><ShoppingBag width="30px" height="40px" className="cartIcon" /></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default StyledNavbar