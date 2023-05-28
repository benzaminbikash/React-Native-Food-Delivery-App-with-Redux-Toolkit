import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findCart = state.cart.find(e => e.id === action.payload.id)
      if (findCart) {
        findCart.quantity++
      } else {
        state.cart.push({...action.payload, quantity: 1})
      }
    },
    removeToCart: (state, action) => {
      const removeData = state.cart.filter(e => e.id !== action.payload.id)
      state.cart = removeData
    },
    incrementQuanity: (state, action) => {
      const findCart = state.cart.find(e => e.id === action.payload.id)
      findCart.quantity++
    },
    decreaseQuantity: (state, action) => {
      const findCart = state.cart.find(e => e.id === action.payload.id)
      if (findCart.quantity === 1) {
        const removeData = state.cart.filter(e => e.id !== action.payload.id)
        state.cart = removeData
      } else {
        findCart.quantity--
      }
    },
    clearCart: state => {
      state.cart = []
    },
  },
})
export const {
  addToCart,
  removeToCart,
  incrementQuanity,
  decreaseQuantity,
  clearCart,
} = CartSlice.actions

export default CartSlice.reducer
