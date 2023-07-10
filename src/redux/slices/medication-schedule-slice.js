import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    owner: {
      id: 1,
      name: 'John Smith',
      isChild: false,
      dateOfBirth: '2023-07-06T20:20:54.705Z',
      weight: null,
      isMale: true
    },
    medication: { id: 1, name: 'Apap', expirationDate: '12-08-2023', openedOn: '12-03-2023' },
    medForm: 'Injection(s)',
    dosage: 3,
    dosageHour: '2023-07-06T14:15:00.003Z',
    isEveryday: true,
    isDayIntervals: false,
    dayIntervals: null,
    isSpecificDays: false,
    specificDays: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false
    },
    additionDate: new Date(),
    id: 13
  }
];

export const medicationScheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addMedicationToSchedule: (state, action) => {
      state.push(action.payload);
    },
    removeMedicationFromSchedule: (state, action) => {
      const index = state.findIndex((medicine) => medicine.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { addMedicationToSchedule, removeMedicationFromSchedule } =
  medicationScheduleSlice.actions;
export default medicationScheduleSlice.reducer;
