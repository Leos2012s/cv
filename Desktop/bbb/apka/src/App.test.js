import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CV heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'CV' })).toBeInTheDocument();
});
