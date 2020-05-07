import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Page component', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('page')).toBeInTheDocument();
});
