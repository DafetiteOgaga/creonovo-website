// BookingForm.test.js
import { render, screen, fireEvent } from './test-utils';
import BookingForm from '../component/BookingForm';


test('Form submission is enabled when all fields are valid', () => {
    render(<BookingForm />);
    
    // Fill in all the fields
    fireEvent.change(screen.getByPlaceholderText(/Firstname/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/Lastname/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/123-456-789/i), { target: { value: '123-456-789' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Choose date:/i), { target: { value: '2024-12-31' } });
    fireEvent.change(screen.getByLabelText(/Choose time:/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByPlaceholderText(/0/i), { target: { value: '8' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByLabelText(/Standard/i));
    
    // Check if the button is enabled
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).not.toBeEnabled();
});
