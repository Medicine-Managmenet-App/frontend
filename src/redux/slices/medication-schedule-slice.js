'use client';

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
    dosagePerDay: 2,
    dosageHours: ['2023-07-06T14:15:00.003Z', '2023-07-06T17:10:00.003Z'],
    takenAt: null,
    additionDate: new Date()
  },
  {
    owner: {
      id: 1,
      name: 'John Smith',
      isChild: false,
      dateOfBirth: '2023-07-06T20:20:54.705Z',
      weight: null,
      isMale: true
    },
    medication: { id: 2, name: 'Ibuprofen', expirationDate: '12-08-2023', openedOn: '12-03-2023' },
    medForm: 'Pill(s)',
    dosage: 2,
    isEveryday: false,
    isDayIntervals: true,
    dayIntervals: 2,
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
    dosagePerDay: 2,
    dosageHours: ['2023-07-06T14:15:00.003Z', '2023-07-06T17:10:00.003Z'],
    takenAt: null,
    additionDate: new Date()
  },
  {
    owner: {
      id: 3,
      name: 'Suzie Smith',
      isChild: true,
      dateOfBirth: new Date(),
      weight: 40,
      isMale: false
    },
    medication: { id: 1, name: 'Apap', expirationDate: '12-08-2023', openedOn: '12-03-2023' },
    medForm: 'Milligram(s)',
    dosage: 3,
    isEveryday: false,
    isDayIntervals: false,
    dayIntervals: null,
    isSpecificDays: true,
    specificDays: {
      Monday: true,
      Tuesday: false,
      Wednesday: false,
      Thursday: true,
      Friday: false,
      Saturday: false,
      Sunday: true
    },
    dosagePerDay: 2,
    dosageHours: ['2023-07-06T15:30:00.003Z', '2023-07-06T16:20:00.003Z'],
    takenAt: null,
    additionDate: new Date()
  }
];

export const medicationScheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addMedicationToSchedule: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeMedicationFromSchedule: (state, action) => {
      return state.filter((member) => member.name !== action.payload.name);
    },
    editMedicationSchedule: (state, action) => {
      const index = state.findIndex((member) => member.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { addMedicationToSchedule, removeMedicationFromSchedule, editMedicationSchedule } =
  medicationScheduleSlice.actions;
export default medicationScheduleSlice.reducer;
