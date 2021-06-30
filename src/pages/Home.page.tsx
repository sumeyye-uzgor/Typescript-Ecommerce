import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard.component'
import productData from '../db/productData.js'
import { Product } from '../schemas/product.schema'
import HomeLayout from '../components/HomeLayout.component'
import { useSelector } from 'react-redux'
import { State } from '../schemas/redux.schema'

function Home() {
    const [products, setProducts] = useState<Product[]>([])
    const category = useSelector((state: State) => state.category)

    useEffect(
        //used this method because normally data fetched from an api inside useEffect
        () =>
            setProducts(category === 'all' ? productData : productData.filter(item => item.category === category)), [category])
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