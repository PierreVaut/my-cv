import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import ResumeContext, { initialState, constants } from '../../context';


test('renders Header component', () => {
  const mockState = {
    ...initialState,
    header: {
      ...initialState.header,
      email: 'mock@email.com',
      linkedin: {
        text: 'mockLinkedinProfile',
        link: '',
        description: '',
      },
    },
  };
  const { getByTestId, getByText } = render(
    <ResumeContext.Provider value={mockState}>
      <Header resource={constants.HEADER} />
    </ResumeContext.Provider>,
  );
  expect(getByTestId('header')).toBeInTheDocument();
  expect(getByTestId('header-text')).toBeInTheDocument();
  expect(getByText('mock@email.com')).toBeInTheDocument();
  expect(getByText('mockLinkedinProfile')).toBeInTheDocument();
});
