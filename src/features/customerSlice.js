import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customers: [],
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    addCustomerFood: (state, action) => {
      const id = action.payload.id;
      state.customers.forEach((customer) => {
        if (customer.id === id) {
          customer.orders.push(action.payload.order);
        }
      });
    },
  },
});

export const { addCustomer, addCustomerFood } = customerSlice.actions;

export default customerSlice.reducer;
