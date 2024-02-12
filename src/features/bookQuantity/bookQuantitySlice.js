import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quantity: 1
}

export const bookQuantity = createSlice({
    name: 'bookQuantity',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            (action.payload > 0 && action.payload < 10) ? state.quantity += 1 : alert("Limit Exceeded");
        },
        decreaseQuantity: (state, action) => {
            (action.payload > 1  && action.payload <= 10) ? state.quantity -= 1 : alert("Can't go below 1")
        }
    }
})

export const { increaseQuantity, decreaseQuantity } = bookQuantity.actions;

export default bookQuantity.reducer;