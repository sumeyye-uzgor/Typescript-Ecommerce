import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { ReactComponent as ShoppingBag } from '../assets/ShoppingBag.svg'

function StyledNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">... Clothing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        {/* <ShoppingBag onMouseEnter width="30px" height="40px" className="cartIcon" /> */}

                        <Nav.Link href="/checkout"><ShoppingBag width="30px" height="40px" className="cartIcon" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default StyledNavbar