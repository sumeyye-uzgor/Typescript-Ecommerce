import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon/CartIcon.component'

function StyledNavbar() {
    return (
        <Navbar expand="lg" fixed="top" bg="white" style={{ zIndex: 5 }}>
            <Container>
                <Navbar.Brand href="/">Passion Fashion</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="li" >
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="li" >
                            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
                                About
                            </Link>
                        </Nav.Link>

                        <Nav.Link as="li" >
                            <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                                Contact
                            </Link>
                        </Nav.Link>
                        {/* <ShoppingBag onMouseEnter width="30px" height="40px" className="cartIcon" /> */}
                        {/* <Nav.Link as="li" > */}
                        {/* </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                <CartIcon />


            </Container>
        </Navbar >
    )
}

export default StyledNavbar