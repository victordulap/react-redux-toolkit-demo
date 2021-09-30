import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';
import CustomerCard from './components/CustomerCard';

function App() {
  const { reservations, customers } = useSelector((state) => state);

  const [reservationNameInput, setReservationNameInput] = useState('');

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;

    dispatch(addReservation(reservationNameInput));

    setReservationNameInput('');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.activeReservations.map((name, index) => {
                return (
                  <ReservationCard key={index} name={name} index={index} />
                );
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              name={customer.name}
              orders={customer.orders}
              id={customer.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
