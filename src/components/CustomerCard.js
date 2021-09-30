import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomerFood } from '../features/customerSlice';

const CustomerCard = ({ name, orders, id }) => {
  const [customerOrderInput, setCustomerOrderInput] = useState('');

  const dispatch = useDispatch();

  const handleAddOrder = () => {
    if (!customerOrderInput) return;

    dispatch(addCustomerFood({ id, order: customerOrderInput }));

    setCustomerOrderInput('');
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {orders && orders.map((order) => <p>{order}</p>)}
        </div>

        <div className="customer-food-input-container">
          <input
            value={customerOrderInput}
            onChange={(e) => setCustomerOrderInput(e.target.value)}
          />
          <button
            onClick={() => {
              handleAddOrder();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
