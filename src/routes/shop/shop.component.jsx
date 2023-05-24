import React, { useEffect } from 'react'

import './shop.styles.scss'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import { getCategoriesAndDocuments } from '../../utils/firebase.utils'

import { setCategoriesMap } from '../../store/categories/categories.action'
import { useDispatch } from 'react-redux'

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log({ categoryMap })
            dispatch(setCategoriesMap(categoryMap))
        }

        getCategoriesMap()


    }, [])


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop