import Hero from './Hero';
import BookingForm from './BookingForm';
import { submitAPI } from "../API/api"
import { useNavigate } from "react-router-dom";

export default function BookingPage () {
	const navigate = useNavigate();

	const submitForm = (formData) => {
		const isSubmitted = submitAPI(formData);
		if (isSubmitted) {
			navigate("/confirmed");
		}
	}
	return (
        <>
		    <Hero booking={true} />
			<BookingForm submitForm={submitForm}/>
        </>
    )
}
