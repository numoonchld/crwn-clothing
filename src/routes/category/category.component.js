import { useParams } from 'react-router-dom'
import './category.styles.scss'

import React, { useContext, useEffect, useState } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'

const Category = () => {

    const { cateogry } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)

    const [products, setProducts] = useState(categoriesMap[cateogry])

    useEffect(() => {

        setProducts(categoriesMap[cateogry])

    }, [
        cateogry,
        categoriesMap
    ])

    return (
        <div className='category-container'>
            {
                products && products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )
}

export default Category