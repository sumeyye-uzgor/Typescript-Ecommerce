import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from '../schemas/redux.schema'

function Checkout() {
    const cartItems = useSelector((state: State) => state.cartItems)
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <Row style={{ fontSize: "30px" }} className="justify-content-center my-5">
                        Checkout
                    </Row>
                    {cartItems.length > 0 ? cartItems.map(
                        item => (
                            <Row key={item.id} className="my-3 align-items-center" >
                                <Col xs={2} >
                                    <img src={item.image} width="50px" alt="product image" />
                                </Col>
                                <Col xs={4}>
                                    {item.name}
                                </Col>
                                <Col xs={3} className="justify-content-center">
                                    <Row>
                                        <Col xs={1} />
                                        <Col xs={2}>+</Col>
                                        <Col xs={2}>1</Col>
                                        <Col xs={2}>-</Col>
                                        <Col xs={5} />

                                    </Row>
                                </Col>
                                <Col xs={1}>
                                    ${item.price}
                                </Col>
                                <Col xs={2}>
                                    Delete
                                </Col>
                            </Row>
                        )
                    )
                        :
                        <Row className="justify-content-center my-5">
                            Your cart is empty!
                        </Row>
                    }


                </Col>
            </Row>
        </Container>
    )
}
export default Checkout;