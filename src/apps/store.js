import { configureStore } from '@reduxjs/toolkit';
import bookQuantity from '../features/bookQuantitySlice';

export const store = configureStore({
    reducer: bookQuantity
})