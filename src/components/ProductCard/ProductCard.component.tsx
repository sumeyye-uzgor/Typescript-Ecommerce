import React, { useState } from 'react'
import { Card, Col, Row, Button } from "react-bootstrap"
import { Product } from '../../schemas/product.schema'
import CartIcon from '../../assets/CartIcon.asset'
import './ProductCard.style.css'
import { addToCart, setDetailsProduct } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
    const [isHovered, setIsHovered] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory();
    function handleDetails() {
        dispatch(setDetailsProduct(product))
        history.push('/details')
    }
    function handleCart() {
        dispatch(addToCart(product))
    }
    return (
        <Col xs={11} md={5} lg={4} className="mb-5">
            <Card
                className="mb-2 styledCard"
                bg="white"


            >
                {/* <Card.Img className="cardImage" src={product.image} alt={product.name} height="270px" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} /> */}
                <Col className="d-none d-md-flex imageCol1" style={{ backgroundImage: `url(${product.image})` }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                    <Row className='imageRow'>
                        <Col className="imageCol2">
                            <Button className={isHovered ? 'cardButton' : 'd-none'} variant="dark" onClick={handleCart}> Add To Cart</Button>
                            <Button className={isHovered ? 'cardButton' : 'd-none'} variant="dark" onClick={handleDetails}>Product Details</Button>

                        </Col>
                    </Row>


                </Col>
                <Col className="d-md-none d-flex imageCol1" style={{ backgroundImage: `url(${product.image})` }}>
                    <Row className="imageRow">
                        <Col className="imageCol2">
                            <Button className="cardButton" variant="dark" onClick={handleCart}>Add To Cart</Button>
                            <Button className="cardButton" variant="dark" onClick={handleDetails}>Product Details</Button>

                        </Col>
                    </Row>


                </Col>


                <Card.Body className="cardBody d-flex align-items-end justify-content-between">

                    <Row>
                        {product.name}

                    </Row>
                    <Row>

                        &#36;{product.price}
                    </Row>

                </Card.Body>
            </Card>
        </Col >
    )

}

export default ProductCard