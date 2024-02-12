import { configureStore } from '@reduxjs/toolkit';
import bookQuantity from '../features/bookQuantity/bookQuantitySlice';
import addToCart from '../features/addToCart/addToCartSlice';

export const store = configureStore({
    reducer: {bookQuantity, addToCart}
})