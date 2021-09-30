import { configureStore } from '@reduxjs/toolkit';
import reservetionsReducer from '../features/reservationSlice';
import customerReducer from '../features/customerSlice';

export const store = configureStore({
  reducer: {
    reservations: reservetionsReducer,
    customers: customerReducer,
  },
});
