import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';


test('renders Item component', () => {
  const props = {
    itemData: {
      title: 'some-title',
      place: 'some-place',
      timePeriod: 'some-time-period',
      show: true,
      order: 0,
    },
  };
  const { getByTestId, getByText } = render(
    <Item {...props} />,
  );
  expect(getByTestId('item-some-title')).toBeInTheDocument();
  expect(getByText('some-title')).toBeInTheDocument();
  expect(getByText('- some-place')).toBeInTheDocument();
  expect(getByText('some-time-period')).toBeInTheDocument();
});

test('does not render Item component', () => {
  const props = {
    itemData: {
      title: 'some-title',
      place: 'some-place',
      timePeriod: 'some-time-period',
      show: false,
      order: 0,
    },
  };

  const { getByTestId } = render(
    <Item {...props} />,
  );
  expect(() => getByTestId('item-some-title')).toThrow();
});
