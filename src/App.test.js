import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Page component', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('page')).toBeInTheDocument();
  expect(getByTestId('header')).toBeInTheDocument();
  expect(getByTestId('page-block-left')).toBeInTheDocument();
  expect(getByTestId('page-block-right')).toBeInTheDocument();
});
