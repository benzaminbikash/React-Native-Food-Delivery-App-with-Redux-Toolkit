import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './Slice/CartSlice'

export default configureStore({
  reducer: {
    cart: CartSlice,
  },
})
