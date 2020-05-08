import React from 'react';
import { render } from '@testing-library/react';
import PageBlock from './PageBlock';
import ResumeContext, { initialState } from '../../context';

const props = {
  className: '',
  pageBlockType: 'some-pageBlock-level-resource',
};

test('renders PageBlock component', () => {
  const { getByTestId } = render(
    <PageBlock {...props} />,
  );
  expect(getByTestId('page-block-some-pageBlock-level-resource')).toBeInTheDocument();
});

test('renders ItemBlock components', () => {
  const mockState = {
    ...initialState,
    'some-pageBlock-level-resource': {
      'some-ItemBlock-level-resource': [],
      'some-other-ItemBlock-level-resource': [],
    },
  };
  const { getByTestId, getByText } = render(
    <ResumeContext.Provider value={mockState}>
      <PageBlock {...props} />
    </ResumeContext.Provider>,
  );
  expect(getByTestId('item-block-some-ItemBlock-level-resource')).toBeInTheDocument();
  expect(getByTestId('item-block-some-ItemBlock-level-resource')).toBeInTheDocument();
  expect(getByText('some-ItemBlock-level-resource')).toBeInTheDocument();
  expect(getByText('some-other-ItemBlock-level-resource')).toBeInTheDocument();
});
