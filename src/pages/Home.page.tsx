import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard.component'
import productData from '../db/productData.js'
import { Product } from '../schemas/product.schema'
import HomeLayout from '../components/HomeLayout.component'
import { useSelector } from 'react-redux'
import { State } from '../schemas/redux.schema'
import { Row } from 'react-bootstrap'

function Home() {
    const titles = { all: 'All Products', hats: 'Hats', sneakers: 'Sneakers', jackets: "Jackets", men: 'Men', women: "Women" }
    const [products, setProducts] = useState<Product[]>([])
    const category = useSelector((state: State) => state.category)

    useEffect(
        //used this method because normally data fetched from an api inside useEffect
        () =>
            setProducts(category === 'all' ? productData : productData.filter(item => item.category === category)), [category])
    return (
        <HomeLayout>
            <Row className="justify-content-center my-5" style={{ fontSize: "30px" }}>
                {category === 'all' ? 'ALL PRODUCTS' : category.toUpperCase()}
            </Row>
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

        </HomeLayout>
    )

}

export default Home