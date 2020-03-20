import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { HEADER_TEXT, FOOTER_TEXT } from '../constants/constants';

test('renders header and footer', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(HEADER_TEXT);
  const footerElement = getByText(FOOTER_TEXT);
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
