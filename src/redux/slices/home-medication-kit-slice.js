'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Apap', expirationDate: '12-08-2023', openedOn: '12-03-2023' }
];

export const medicationKitSlice = createSlice({
  name: 'medicationKit',
  initialState,
  reducers: {
    addMedicationToKit: (state, action) => {
      state.push(action.payload);
    },
    removeMedicationFromKit: (state, action) => {
      return state.filter((medication) => medication.name !== action.payload.name);
    }
  }
});

export const { addMedicationToKit, removeMedicationFromKit } = medicationKitSlice.actions;
export default medicationKitSlice.reducer;
