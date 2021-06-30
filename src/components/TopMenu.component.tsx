import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
function TopMenu() {
    return (
        <Col className="d-flex" style={{ width: "100vw", height: "70px" }}>
            <Row>All Products</Row>
            <Row>Hats</Row>
            <Row>Snaekaers</Row>
            <Row>Jackets</Row>
            <Row>Men</Row>
            <Row>Women</Row>
        </Col>


    )
}
export default TopMenu