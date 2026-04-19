import React from 'react';
import { render } from '@testing-library/react';
import ItemBlock from './ItemBlock';

const props = {
  itemBlockData: {
    logo: 'some-logo.png',
    items: [{
      title: 'some-title',
      place: 'some-place',
      timePeriod: 'some-time-period',
      show: true,
      order: 0,
    }],
  },
  itemBlockType: 'some-itemBlockType',
};

test('renders ItemBlock component', () => {
  const { getByTestId } = render(
    <ItemBlock {...props} />,
  );
  expect(getByTestId('item-block-some-itemBlockType')).toBeInTheDocument();
});

test('renders Item components', () => {
  const { getByTestId, getByText } = render(
    <ItemBlock {...props} />,
  );
  expect(getByTestId('item-some-title')).toBeInTheDocument();
  expect(getByText('some-title')).toBeInTheDocument();
});


test('renders Item Block image', () => {
  const { getByTestId } = render(
    <ItemBlock {...props} />,
  );
  expect(getByTestId('item-block-image')).toBeInTheDocument();
});
