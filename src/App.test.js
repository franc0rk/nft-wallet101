import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.queryByText('Hello, world!');
  expect(text).toHaveTextContent('Hello, world!');
});
