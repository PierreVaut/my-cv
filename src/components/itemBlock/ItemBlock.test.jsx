import React from 'react';
import { render } from '@testing-library/react';
import ItemBlock from './ItemBlock';

const props = {
  itemBlockData: [{
    title: 'some-title',
    place: 'some-place',
    timePeriod: 'some-time-period',
    show: true,
    order: 0,
  }],
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
