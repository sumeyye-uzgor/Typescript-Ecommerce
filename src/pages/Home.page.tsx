import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row } from "react-bootstrap"
import ProductCard from '../components/ProductCard/ProductCard.component'
import productData from '../db/productData.js'
import { Product } from '../schemas/product.schema'

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
                        (
                            <ProductCard product={product} key={product.id} />
                        )
                    )
                }
            </Row>
        </Container>
    )

}

export default Home