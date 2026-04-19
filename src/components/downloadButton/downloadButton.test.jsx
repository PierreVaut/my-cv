import React from 'react';
import { render } from '@testing-library/react';
import DownloadButton from './DownloadButton';
import ResumeContext from '../../context';


test('renders DownloadButton component', () => {
  const mockState = {
    downloadButton: {
      text: 'some downloadButton text',
      link: '/some-download-file.pdf',
      icon: '/some-icon.png',
    },
  };
  const { getByTestId, getByText } = render(
    <ResumeContext.Provider value={mockState}>
      <DownloadButton resource="downloadButton" />
    </ResumeContext.Provider>,
  );
  expect(getByTestId('downloadButton-container')).toBeInTheDocument();
  expect(getByText('some downloadButton text')).toBeInTheDocument();
});
