import { createSlice } from '@reduxjs/toolkit'
import { books } from '../../bookData'

const initialState = {
    cartBooks: [],
    isCartEmpty: true
}

export const addBook = createSlice({
    name: 'addBook',
    initialState,
    reducers: {
        addBookToCart: (state, action) => {
            state.cartBooks = state.cartBooks.filter((book) => action.payload.id !== book.id && book);
            
            const [{id, name, price, title, image}] = books.filter((book) => action.payload.id === book.id && book);
            
            const selectedBook = {
                id, 
                name, 
                price, 
                title, 
                image,
                quantity: action.payload.quantity
            };
            
            (state.cartBooks.length + 1 > 0) ? state.isCartEmpty = false : state.isCartEmpty = true;
            
            state.cartBooks.unshift(selectedBook);
        },
        removeBookFromCart: (state, action) => {
            (state.cartBooks.length - 1 < 1) ? state.isCartEmpty = true : state.isCartEmpty = false;
            state.cartBooks = state.cartBooks.filter((book) => action.payload !== book.id && book);
        },
        increaseCartQuantity: (state, action) => {
            (action.payload.quantity > 0 && action.payload.quantity < 10) ? state.cartBooks.filter((book) => action.payload.id === book.id && (book.quantity += 1)): alert("Limit Exceeded");
        },
        decreaseCartQuantity: (state, action) => {
            (action.payload.quantity > 1  && action.payload.quantity <= 10) ? state.cartBooks.filter((book) => action.payload.id === book.id && (book.quantity -= 1)) : alert("Can't go below 1")
        },
        emptyCart: (state, action) => {
            state.cartBooks = [];
            state.isCartEmpty = true;
        }
    }
})

export const { addBookToCart, removeBookFromCart, increaseCartQuantity, decreaseCartQuantity, emptyCart } = addBook.actions

export default addBook.reducer;