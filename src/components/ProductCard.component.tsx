import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Product from '../schemas/product.schema'
import CartIcon from '../assets/CartIcon.asset'

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
    return (
        <Card
            className="mb-2"
            bg="dark"
        >
            <Card.Img src={product.image} alt={product.name} height="270px" />
            <div style={{ position: "absolute", bottom: '60px', right: "10px" }}>
                <CartIcon color="#f2f7ff" />
            </div>

            <Card.Body style={{ backgroundColor: "#f2f7ff" }}>

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
    )

}

export default ProductCard