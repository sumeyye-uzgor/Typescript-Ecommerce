import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
function SideMenu() {
    return (
        <Row style={{ height: "100vh", backgroundColor: "gray" }}>
            <Col>
                <Row style={{ width: '100%', backgroundColor: "gray" }}>All Products</Row>
                <Row style={{ width: '100%', backgroundColor: "gray" }}>Hats</Row>
                <Row style={{ width: '100%', backgroundColor: "gray" }}>Sneakers</Row>
                <Row style={{ width: '100%', backgroundColor: "gray" }}>Jackets</Row>
                <Row style={{ width: "100%", backgroundColor: "gray" }}>Men</Row>
                <Row style={{ width: '100%', backgroundColor: "gray" }}>Women</Row>
            </Col>
        </Row>
    )
}
export default SideMenu