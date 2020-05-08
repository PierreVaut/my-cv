import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import ResumeContext, { initialState } from '../../context';


test('renders Page component', () => {
  const mockState = {
    ...initialState,
    personalInfo: {
      ...initialState.personalInfo,
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
      <Header />
    </ResumeContext.Provider>,
  );
  expect(getByTestId('header')).toBeInTheDocument();
  expect(getByTestId('header-text')).toBeInTheDocument();
  expect(getByText('mock@email.com')).toBeInTheDocument();
  expect(getByText('mockLinkedinProfile')).toBeInTheDocument();
});
