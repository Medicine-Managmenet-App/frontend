// store.js
'use client';

import { configureStore } from '@reduxjs/toolkit';
import familyReducer from '../slices/family-slice';
import medicationKitReducer from '../slices/home-medication-kit-slice';
import scheduleReducer from '../slices/medication-schedule-slice';

export const store = configureStore({
  reducer: {
    family: familyReducer,
    medicationKit: medicationKitReducer,
    schedule: scheduleReducer
  }
});

export default store;
