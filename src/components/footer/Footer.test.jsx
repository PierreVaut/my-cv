import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import ResumeContext from '../../context';


test('renders Footer component', () => {
  const mockState = {
    footer: {
      footerText: 'some footer text',
      footerLink: 'http://www.footer-link.com',
    },
  };
  const { getByTestId, getByText } = render(
    <ResumeContext.Provider value={mockState}>
      <Footer resource="footer" />
    </ResumeContext.Provider>,
  );
  expect(getByTestId('footer')).toBeInTheDocument();
  expect(getByTestId('footer-text')).toBeInTheDocument();
  expect(getByText('some footer text')).toBeInTheDocument();
  expect(getByText('http://www.footer-link.com')).toBeInTheDocument();
});
