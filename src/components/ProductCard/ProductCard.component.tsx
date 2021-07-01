import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import { Product } from '../../schemas/product.schema'
import CartIcon from '../../assets/CartIcon.asset'
import './ProductCard.style.css'
import { addToCart } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
    const dispatch = useDispatch()

    function HandleCart() {
        dispatch(addToCart(product))
    }
    return (
        <Col xs={11} md={5} lg={4} className="mb-5">
            <Card
                className="mb-2"
                bg="white"
                style={{ height: "350px", border: "1px solid black" }}

            >
                <Card.Img src={product.image} alt={product.name} height="270px" />
                <div className="cartDiv">
                    <CartIcon className="cartIcon" onClick={HandleCart} />

                </div>

                <Card.Body className="cardBody d-flex align-items-end justify-content-between">

                    <Row>
                        {product.name}

                    </Row>
                    <Row>

                        &#36;{product.price}
                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )

}

export default ProductCard