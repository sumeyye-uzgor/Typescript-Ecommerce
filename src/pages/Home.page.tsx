import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from '../components/ProductCard.component'
import productData from '../db/productData.js'
import Product from '../schemas/product.schema'

function Home() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(
        //used this method because normally data fetched from an api inside useEffect
        () =>
            setProducts(productData), [])
    return (
        <Container>
            <Row>
                {
                    products.map(
                        product =>
                        (<Col xs={11} md={4} lg={3} key={product.id} className="mb-5">
                            <ProductCard product={product} />

                        </Col>)
                    )
                }
            </Row>
        </Container>
    )

}

export default Home