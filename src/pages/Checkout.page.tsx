import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { State } from '../schemas/redux.schema'
import { deleteFromCart, setQuantity } from '../redux/actions'

function Checkout() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: State) => state.cartItems)
    const cartTotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
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
                                    <img src={item.image} width="50px" alt="product" />
                                </Col>
                                <Col xs={3}>
                                    {item.name}
                                </Col>
                                <Col xs={3} className="justify-content-center">
                                    <Row>
                                        <Col xs={1} />
                                        <Col xs={2} onClick={() => dispatch(setQuantity(item.id, 1))} style={{ cursor: "pointer" }}>+</Col>
                                        <Col xs={2}>{item.qty}</Col>
                                        {
                                            item.qty > 1 && <Col xs={2} onClick={() => dispatch(setQuantity(item.id, -1))} style={{ cursor: "pointer" }}>-</Col>
                                        }
                                        <Col xs={5} />

                                    </Row>
                                </Col>
                                <Col xs={2}>
                                    {item.qty} x ${item.price}
                                </Col>
                                <Col xs={2} onClick={() => dispatch(deleteFromCart(item.id))}>
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

                    <Row className="justify-content-center mt-5">
                        <hr />
                    </Row>

                    <Row className="justify-content-end my-2 me-5" style={{ fontSize: "23px" }}>
                        TOTAL: ${cartTotal}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Checkout;