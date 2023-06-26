// store.js
'use client';

import { configureStore } from '@reduxjs/toolkit';
import familyReducer from '../slices/family-slice';
import medicineKitReducer from '../slices/home-medicine-kit-slice';

export const store = configureStore({
  reducer: {
    family: familyReducer,
    medicineKit: medicineKitReducer
  }
});

export default store;
