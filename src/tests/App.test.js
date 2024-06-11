import { render, screen } from './test-utils';
import App from '../App';

test('Renders Testimonial heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testimonials/i);
  expect(linkElement).toBeInTheDocument();
});
