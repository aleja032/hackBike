import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state.js';
import { saveLocalStorage } from '../localStorage/localStorage.js';
import { fetchAllBikes } from './thunk.js';

const bikes = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    setComment: (state, action) => {
        console.log(action.payload);
        state.commentsLocalStorage.unshift(action.payload);
        saveLocalStorage('comments', state.commentsLocalStorage);
    },
    setReservas: (state, action) => {
      console.log(action.payload);
      state.reservas.unshift(action.payload);
  },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllBikes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBikes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.infoBikes = action.payload;
      })
      .addCase(fetchAllBikes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const { setComment, setReservas } = bikes.actions;
export default bikes.reducer;