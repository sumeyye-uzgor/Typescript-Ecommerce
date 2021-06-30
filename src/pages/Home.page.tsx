import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard.component'
import productData from '../db/productData.js'
import { Product } from '../schemas/product.schema'
import HomeLayout from '../components/HomeLayout.component'

function Home() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(
        //used this method because normally data fetched from an api inside useEffect
        () =>
            setProducts(productData), [])
    return (
        <HomeLayout>
            {
                products.map(
                    product =>
                    (
                        <ProductCard product={product} key={product.id} />
                    )
                )
            }
        </HomeLayout>
    )

}

export default Home