import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import { addToCart } from "../redux/actions"
import { State } from "../schemas/redux.schema";



function Details() {
    const dispatch = useDispatch()
    const product = useSelector((state: State) => state.detailsProduct)
    return (
        product.id !== -1 ? (
            <Container className="my-5">
                <Row>
                    <Col xs={11}>
                        <Card className="mt-5">
                            <Card.Body className="m-auto" >
                                <Row className="m-auto">
                                    <Col xs={12} md={4} className="m-auto">
                                        <Card.Img variant="top" src={product.image} height="350px" style={{ border: "1px solid black" }} />

                                    </Col>
                                    <Col xs={12} md={8}>
                                        <Card.Title className="text-center p-3">{product.name.toUpperCase()}</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos inventore, odio aperiam id quibusdam labore possimus, quo accusamus blanditiis, eveniet corporis voluptatibus ab nisi consequuntur voluptas voluptatum eos dolor consectetur.
                                        </Card.Text>
                                        <Button className="me-3 mt-4" style={{ backgroundColor: "rgba(0,0,0,0.8)", border: "none", cursor: "default", boxShadow: "none" }}>
                                            ${product.price}
                                        </Button>
                                        <Button onClick={() => dispatch(addToCart(product))} variant="dark" className="me-3 mt-4" style={{ backgroundColor: "rgba(0,0,0,0.8)", border: "none" }}>
                                            ADD TO CART
                                        </Button>


                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        ) : (
            <Redirect to="/" />
        )


    )
}

export default Details;