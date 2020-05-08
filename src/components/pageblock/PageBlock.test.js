import React from 'react';
import { render } from '@testing-library/react';
import PageBlock from './PageBlock';


test('renders Page component', () => {
  const { getByTestId, getByText } = render(
    <PageBlock className="mockClassName" />,
  );
  expect(getByTestId('page-block-mockClassName')).toBeInTheDocument();
  expect(getByText('toto')).toBeInTheDocument();
});
