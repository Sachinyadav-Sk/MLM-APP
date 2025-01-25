
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import React from 'react';

test('it displays text content correctly', () => {
  render(<div>React</div>);
  const element = screen.getByText(/react/i);
  // expect(element).toHaveTextContent(/react/i);
});
