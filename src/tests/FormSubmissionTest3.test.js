// BookingForm.test.js
import { render, screen, fireEvent } from './test-utils';
import BookingForm from '../component/BookingForm';
import { BookingContext } from '../component/BookingContext';


test('Form submission is disabled when an invalid phone number is entered', () => {
    const mockSubmitForm = jest.fn();
    const mockContextValue = {
        setSubmit: jest.fn(),
        dispatchTimes: jest.fn(),
        state: { availableTimes: ["17:00", "17:30", "18:00", "18:30", "21:00", "21:30", "22:00", "23:00"] },
    };

    render(
        <BookingContext.Provider value={mockContextValue}>
            <BookingForm submitForm={mockSubmitForm} />
        </BookingContext.Provider>
    );

	// Fill in all the fields except for the phone number with an invalid value
    fireEvent.change(screen.getByLabelText(/First:/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last:/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Phone:/i), { target: { value: '12345' } }); // Invalid phone number
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Choose date:/i), { target: { value: '2024-12-31' } });
    fireEvent.change(screen.getByLabelText(/Choose time:/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/No. of guests:/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByLabelText(/Standard/i));

	// Check if the button is disabled
    const submitButton = screen.getByText(/Make Your reservation/i).closest('button');
    expect(submitButton).toBeEnabled();
});
