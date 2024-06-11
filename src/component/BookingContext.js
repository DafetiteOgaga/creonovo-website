import React, { createContext, useReducer, useState } from 'react';
import { fetchAPI } from '../API/api'; // Adjust the path if necessary

// Create the context
const BookingContext = createContext();

// initial state
const initialState = {
  date: new Date(),
  availableTimes: ['--:--', ...fetchAPI(new Date())]
};

// reducer
const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      return {
        ...state, date: newDate,
        availableTimes: ['--:--', ...fetchAPI(new Date())]
      };
    default:
      throw new Error('Unknown action type');
  }
};

// Create a provider component
const BookingProvider = ({ children }) => {
  const [state, dispatchTimes] = useReducer(bookingReducer, initialState);
  const [submit, setSubmit] = useState('');

  return (
    <BookingContext.Provider value={{ state, dispatchTimes, submit, setSubmit }}>
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProvider };
