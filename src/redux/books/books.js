import { createSlice } from '@reduxjs/toolkit';

const initialState = { books: [] };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },

    removeBook(state, action) {
      const foundId = state.books.findIndex((book) => book.id === action.payload);
      state.books.splice(foundId, 1);
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
