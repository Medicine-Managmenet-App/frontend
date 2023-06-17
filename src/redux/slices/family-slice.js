'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const familySlice = createSlice({
  name: 'family',
  initialState,
  reducers: {
    addFamilyMember: (state, action) => {
      state.push(action.payload);
    },
    removeFamilyMember: (state, action) => {
      return state.filter((member) => member.name !== action.payload.name);
    }
  }
});

export const { addFamilyMember, removeFamilyMember } = familySlice.actions;
export default familySlice.reducer;
