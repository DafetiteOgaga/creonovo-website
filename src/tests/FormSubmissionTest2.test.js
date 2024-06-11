// BookingForm.test.js
import { render, screen, fireEvent } from './test-utils';
import BookingForm from '../component/BookingForm';
import { BookingContext } from '../component/BookingContext';


test('Form submission is disabled when a required field is missing', () => {
    const mockSubmitForm = jest.fn(); // Mock function for form submission
    const mockContextValue = {
        setSubmit: jest.fn(),
        dispatchTimes: jest.fn(),
        state: { availableTimes: ["17:00", "17:30", "18:00", "18:30", "21:00", "21:30", "22:00", "23:00"] }, // Mock available times
    };

    render(
        <BookingContext.Provider value={mockContextValue}> 
            <BookingForm submitForm={mockSubmitForm} /> 
        </BookingContext.Provider>
    );

    // Fill out the form except for the firstname to trigger validation error
    fireEvent.change(screen.getByPlaceholderText(/Firstname/i), { target: { value: '' } }); // Ensure firstname is empty
    fireEvent.change(screen.getByPlaceholderText(/Lastname/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/123-456-789/i), { target: { value: '123-456-789' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Choose date:/i), { target: { value: '2024-12-31' } });
    fireEvent.change(screen.getByLabelText(/Choose time:/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/No. of guests:/i), { target: { value: '4' } }); // Use getByLabelText to be more specific
    fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByLabelText(/Standard/i));

    // Check if the button is disabled
    const submitButton = screen.getByText(/Make Your reservation/i).closest('button');
    expect(submitButton).toBeDisabled(); // Verify the button is disabled
});
