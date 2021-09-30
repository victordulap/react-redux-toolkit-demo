import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomerFood } from '../features/customerSlice';

const CustomerCard = ({ name, orders, id }) => {
  const [customerOrderInput, setCustomerOrderInput] = useState('');

  const dispatch = useDispatch();

  const handleAddOrder = () => {
    if (!customerOrderInput) return;

    dispatch(addCustomerFood({ id, order: customerOrderInput }));
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        {orders &&
          orders.map((order) => <div className="customer-food">{order}</div>)}

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
