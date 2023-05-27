import { createSelector } from "reselect"


const selectCartReducer = (state) => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.items
)

export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    cart => cart.isCartOpen
)

export const selectCartCount = createSelector([selectCartItems],
    cartItems => cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity
    }, 0)
)

export const selectCartTotal = createSelector([selectCartItems],
    cartItems => cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price
    }, 0)
)

