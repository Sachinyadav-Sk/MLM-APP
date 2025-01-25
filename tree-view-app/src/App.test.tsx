import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement: HTMLElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
