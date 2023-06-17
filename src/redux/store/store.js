// store.js
'use client';

import { configureStore } from '@reduxjs/toolkit';
import familyReducer from '../slices/family-slice';

export const store = configureStore({
  reducer: {
    family: familyReducer
  }
});

export default store;
