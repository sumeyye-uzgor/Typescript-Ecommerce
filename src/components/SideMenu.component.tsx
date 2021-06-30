import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions'
function SideMenu() {
    const dispatch = useDispatch()
    return (
        <Row style={{ height: "100vh", backgroundColor: "gray" }}>
            <Col>
                <Row style={{ width: '100%', backgroundColor: "gray" }} onClick={() => dispatch(setCategory('all'))}>All Products</Row>
                <Row style={{ width: '100%', backgroundColor: "gray" }} onClick={() => dispatch(setCategory('hats'))}>Hats</Row>
                <Row style={{ width: '100%', backgroundColor: "gray" }} onClick={() => dispatch(setCategory('sneakers'))}>Sneakers</Row>
                <Row style={{ width: '100%', backgroundColor: "gray" }} onClick={() => dispatch(setCategory('jackets'))}>Jackets</Row>
                <Row style={{ width: "100%", backgroundColor: "gray" }} onClick={() => dispatch(setCategory('men'))}>Men</Row>
                <Row style={{ width: '100%', backgroundColor: "gray" }} onClick={() => dispatch(setCategory('women'))}>Women</Row>
            </Col>
        </Row>
    )
}
export default SideMenu