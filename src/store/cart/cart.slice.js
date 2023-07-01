import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartitems, or new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // if current quantity is 1, remove item from cart
  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

  // return back cart itiems with matching cart item with reduced qunatity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

// export const setIsCartOpen = (bool) => {
//   return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool };
// };

// export const addItemToCart = (cartItems, productToAdd) => {
//   const newCartItems = addCartItem(cartItems, productToAdd);
//   return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
// };

// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//   const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

// export const clearItemFromCart = (cartItems, cartItemToClear) => {
//   const newCartItems = clearCartItem(cartItems, cartItemToClear);
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
