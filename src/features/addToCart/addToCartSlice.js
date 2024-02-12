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
            const [{id, name, price, title, image}] = books.filter((book) => action.payload === book.id && book);

            const selectedBook = {
                id, 
                name, 
                price, 
                title, 
                image
            };

            (state.cartBooks.length + 1 > 0) ? state.isCartEmpty = false : state.isCartEmpty = true;

            state.cartBooks.push(selectedBook);
        }
    }
})

export const { addBookToCart } = addBook.actions

export default addBook.reducer;