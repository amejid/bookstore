import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [] };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus() {
      return 'Under Construction';
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
