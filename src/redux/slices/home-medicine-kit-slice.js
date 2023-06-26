'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Apap', expirationDate: '12-08-2023', openedOn: '12-03-2023' }
];

export const medicineKitSlice = createSlice({
  name: 'medicineKit',
  initialState,
  reducers: {
    addMedicineToKit: (state, action) => {
      state.push(action.payload);
    },
    removeMedicineFromKit: (state, action) => {
      return state.filter((member) => member.name !== action.payload.name);
    }
  }
});

export const { addMedicineToKit, removeMedicineFromKit } = medicineKitSlice.actions;
export default medicineKitSlice.reducer;
