import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeReservations: [],
};

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.activeReservations.push(action.payload);
    },
    removeReservation: (state, action) => {
      state.activeReservations.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
