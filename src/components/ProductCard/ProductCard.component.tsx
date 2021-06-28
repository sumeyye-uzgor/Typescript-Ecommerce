import React from 'react'
import { Card, Col } from "react-bootstrap"
import { Product } from '../../schemas/product.schema'
import CartIcon from '../../assets/CartIcon.asset'
import './ProductCard.style.css'

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
    return (
        <Col xs={11} md={4} lg={3} className="mb-5">
            <Card
                className="mb-2"
                bg="dark"
            >
                <Card.Img src={product.image} alt={product.name} height="270px" />
                <div className="cartDiv">
                    {/* <CartIcon color="#f2f7ff" /> */}
                    <CartIcon className="cartIcon" />

                </div>

                <Card.Body className="cardBody">

                    <Card.Text className="d-flex justify-content-between">
                        <div>
                            {product.name}
                        </div>
                        <div>
                            &#36;{product.price}
                        </div>
                    </Card.Text>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text> */}
                </Card.Body>
            </Card>
        </Col>
    )

}

export default ProductCard