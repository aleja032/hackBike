import { configureStore } from '@reduxjs/toolkit';
import bikes  from './slice';

const store = configureStore({
  reducer: {
    bikes: bikes,
  },
});

export default store;