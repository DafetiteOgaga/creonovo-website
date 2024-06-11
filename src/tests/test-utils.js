// test-utils.js
// import React from 'react';
import { render } from '@testing-library/react';
import { BookingProvider } from '../component/BookingContext';

const renderWithProviders = (ui, options) => {
  return render(ui, { wrapper: BookingProvider, ...options });
};

export * from '@testing-library/react';
export { renderWithProviders as render };
