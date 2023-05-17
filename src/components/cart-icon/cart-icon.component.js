
import { CartContext } from '../../contexts/cart.context'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.js'


import React, { useContext } from 'react'

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon