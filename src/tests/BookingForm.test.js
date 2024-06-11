import { render, screen } from './test-utils';
import BookingForm from '../component/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    // Use regex for case-insensitive match
    const headingElement = screen.getByText(/First:/i);
    expect(headingElement).toBeInTheDocument();
});
