import { useState, useContext, useEffect } from "react";
import styled from 'styled-components';
import { BookingContext } from './BookingContext';

const FormStyle = styled.form``
const Input = styled.input`
	color: #444645;
	@media (max-width: 1266px) {
		width: 50%;
	}
	@media (max-width: 584px) {
		width: 40%;
		height: 50%;
	}
`
const Label = styled.label`
	color: #444645;
	font-size: 140%;
	padding-right: ${ ({$diff}) => ( $diff ? '4.3%' : '3%' )};

	@media (max-width: 1266px) {
		font-size: 125%;
	}
	@media (max-width: 1266px) {
		font-size: 105%;
	}
	@media (max-width: 710px) {
		font-size: 90%;
	}
	@media (max-width: 634px) {
		font-size: 85%;
	}
	@media (max-width: 548px) {
		font-size: 80%;
	}
`
const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 4%;
	padding-left: 5%;
	padding-right: 5%;
	margin-bottom: 1%;
`
const RadioContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 3%;
`
const RadioInnerDiv = styled.div`
	padding-bottom: 3%;
`
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 3%;
`
const ButtonBox = styled.div`
	height: 18%;
	width: 40%;
	padding-top: 1.8%;
	padding-bottom: 1.8%;
`
const Button = styled.button``
const Background = styled.div`
	background-color: #008080;
	display: flex;
	flex-direction: column;
	border-radius: 0.94rem;
	padding: 2% 0%;
	margin-bottom: 2%;

	@media (max-width: 740px) {
		padding-top: 4%;
		padding-bottom: 0;
	}
	@media (max-width: 480px) {
		padding-top: 4%;
		padding-bottom: 4%;
	}
`
const LightBackground = styled.div`
	background-color: #EDEFEE;
	padding: 2%;
	border-radius: 0.3rem;
	display: flex;
	width: 100%;
`
const initValues = {
	firstname: "",
	lastname: "",
	contactNumber: "",
	email: "",
	date: "",
	time: "",
	noOfGuests: "1",
	occasion: "",
	selectedOption: "",
}
const currentDate = new Date().toISOString().split("T")[0];

export default function BookingForm (props) {
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const { setSubmit, dispatchTimes, state } = useContext(BookingContext);
	const [ form, updateForm] = useState(initValues)
	const handleForm = (e) => {
		const { name, value } = e.target;
		updateForm((prevItems) => ({
			...prevItems, [name]: value,
		}))
	}

	const handleDateChange = (e) => {
		const { name, value } = e.target
		updateForm((prevItems) => ({
			...prevItems, [name]: value,
		}))
		dispatchTimes({ type: 'UPDATE_TIMES', payload: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
		if (!isButtonDisabled) {
			const submit = form
			setSubmit(submit);
			props.submitForm(submit);
			updateForm(initValues);
			}
	}

	useEffect(() => {
		const allFieldsFilled = Object.values(form)
				.every(value => value !== "" && value !== 1 && value !== '--:--');
			setIsButtonDisabled(!allFieldsFilled);
		}, [form]);
	return (
		<>
			<div className="form-page">
				<FormStyle className='App' onSubmit={handleSubmit}>
					<Background className="Background">
						<FlexContainer className="FlexContainer">
							<LightBackground className="LightBackground">
								<Label htmlFor="firstname">First:</Label>
								<Input
									aria-label="On Click"
									type="text"
									value={form.firstname}
									onChange={handleForm}
									id="firstname"
									name="firstname"
									placeholder="Firstname"
									autoComplete="given-name"
									required>
									</Input>
							</LightBackground>
							<LightBackground className="LightBackground">
								<Label htmlFor="lastname">Last:</Label>
								<Input
									aria-label="On Click"
									type="text"
									value={form.lastname}
									onChange={handleForm}
									id="lastname"
									name="lastname"
									placeholder="Lastname"
									autoComplete="family-name"
									required
									>
								</Input>
							</LightBackground>
						</FlexContainer>
						<FlexContainer className="FlexContainer">
							<LightBackground className="LightBackground">
								<Label htmlFor="contactNumber">Phone:</Label>
								<Input
									aria-label="On Click"
									type="tel"
									value={form.contactNumber}
									onChange={handleForm}
									id="contactNumber"
									name="contactNumber"
									autoComplete="tel"
									placeholder="123-456-789"
									required
									>
								</Input>
							</LightBackground>
							<LightBackground className="LightBackground">
								<Label htmlFor="email">Email:</Label>
								<Input
									aria-label="On Click"
									type="email"
									value={form.email}
									onChange={handleForm}
									id="email"
									name="email"
									placeholder="Email"
									autoComplete="email"
									required>
								</Input>
							</LightBackground>
						</FlexContainer>
					</Background>
					<Background className="Background">
						<FlexContainer className="FlexContainer">
							<LightBackground className="LightBackground">
								<Label htmlFor="res-date">Choose date:</Label>
								<Input
									aria-label="On Click"
									required
									min={currentDate}
									type="date"
									value={form.date}
									onChange={handleDateChange}
									id="res-date"
									name="date">
								</Input>
							</LightBackground>
							<LightBackground className="LightBackground">
								<Label htmlFor="res-time">Choose time:</Label>
								<select
									aria-label="On Click"
									id="res-time"
									name="time"
									value={form.time}
									required
									onChange={handleForm}>
										{state.availableTimes.map((times, index) => (
											<option key={index}>
												{times}
											</option>
											))}
								</select>
							</LightBackground>
						</FlexContainer>
						<FlexContainer className="FlexContainer">
							<LightBackground className="LightBackground">
								<Label htmlFor="guests">No. of guests:</Label>
								<Input
									aria-label="On Click"
									type="number"
									required
									value={form.noOfGuests}
									placeholder="0"
									min="1" max="10"
									id="guests"
									name="noOfGuests"
									onChange={handleForm}>
								</Input>
							</LightBackground>
							<LightBackground className="LightBackground">
								<Label htmlFor="occasion">Occasion:</Label>
								<select
									aria-label="On Click"
									id="occasion"
									name="occasion"
									value={form.occasion}
									required
									onChange={handleForm}>
										<option>Select Occasion</option>
										<option>Birthday</option>
										<option>Anniversary</option>
										<option>Wedding</option>
										<option>Other</option>
								</select>
							</LightBackground>
						</FlexContainer>
					</Background>
					<RadioContainer className="RadioContainer">
						<RadioInnerDiv>
							<Label htmlFor="cbox1">Standard</Label>
								<Input
									aria-label="On Click"
									type="radio"
									value="standard"
									id="cbox1"
									required
									name="selectedOption"
									checked={form.selectedOption === "standard"}
									onChange={handleForm}>
								</Input>
						</RadioInnerDiv>
						<RadioInnerDiv>
							<Label $diff htmlFor="cbox2">Outside</Label>
								<Input
									aria-label="On Click"
									type="radio"
									value="outside"
									id="cbox2"
									required
									name="selectedOption"
									checked={form.selectedOption === "outside"}
									onChange={handleForm}>
								</Input>
						</RadioInnerDiv>
					</RadioContainer>
					<ButtonContainer>
						<ButtonBox className="botton-box">
							<Button disabled={isButtonDisabled}>Make Your reservation</Button>
						</ButtonBox>
					</ButtonContainer>
				</FormStyle>
			</div>
		</>
	)
}
