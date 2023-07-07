import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'John Smith',
    isChild: false,
    dateOfBirth: new Date(),
    weight: null,
    isMale: true
  },

  {
    id: 3,
    name: 'Suzie Smith',
    isChild: true,
    dateOfBirth: new Date(),
    weight: 40,
    isMale: false
  }
];

export const familySlice = createSlice({
  name: 'family',
  initialState,
  reducers: {
    addFamilyMember: (state, action) => {
      state.push(action.payload);
    },
    removeFamilyMember: (state, action) => {
      return state.filter((member) => member.id !== action.payload.id);
    },
    editFamilyMember: (state, action) => {
      const index = state.findIndex((member) => member.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { addFamilyMember, removeFamilyMember, editFamilyMember } = familySlice.actions;
export default familySlice.reducer;
