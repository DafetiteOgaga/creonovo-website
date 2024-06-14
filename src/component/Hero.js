import hero2 from "../llemon_asset/heroPic.jpg"
import hero1 from "../llemon_asset/greekSalad.jpg"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

const specials = {
		title: "Creonovo",
		location: "Lagos Branch",
		image: hero2,
		name: "Greek Salad",
		price: 12.99,
		description: `Creonovo is a charming and inviting
			restaurant known for its vibrant and flavorful
			Calabar cuisine. Nestled in a cozy corner
			of the city, our delightful eatery specializes
			in fresh, simple, and delicious dishes that
			highlight the best of Calabar flavors. `,
		delivery: "Order a delivery",
		bookingTitie: 'Reserve a Table for any Occasion',
	}

const Section = styled.section``
const GridContainer = styled.div`
	flex: ${ ({$booking}) => $booking ? 'none' : '1 1 auto'};
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2%;
	margin-top: -2%;
	margin-bottom: -20%;
`
const Article = styled.article`
	flex: ${ ({$booking}) => $booking ? 'none' : '1 1 auto'};
`
const Image = styled.img``
const CenterImage = styled.div`
	display: flex;
	justify-content: ${ ({$booking}) => $booking ? 'center' : 'end' };
	height: ${ ({$booking}) => $booking ? '85%' : 'none' };
`
const Head1 = styled.h1`
	color: ${ ({$booking}) => $booking ? 'white' : '#F4CE14' };
	text-align: ${ ({$booking}) => $booking ? 'center' : 'left' };
	padding-bottom: ${ ({$booking}) => $booking ? '4.5%' : '0' };
	padding-top: ${ ({$booking}) => $booking ? '2%' : '0' };
	margin-bottom: 0;
`
const Head2 = styled.h2`
	margin-bottom: ${ ({$booking}) => $booking ? '0' : '0' };
	color: white;
`
const Paragraph = styled.p`
	color: white;
`
const ButtonBox = styled.div`
	height: 8%;
	width: ${ ({$booking}) => $booking ? '12%' : '60%' };
	padding-top: ${ ({$booking}) => $booking ? '1.2%' : '0%' };
	padding-bottom: ${ ({$booking}) => $booking ? '1.2%' : '0%' };
	margin-left: ${ ({$booking}) => $booking ? '10%' : '0%' };
`
const Button = styled.button``
const Background = styled.div`
	padding-top: ${ ({$booking}) => $booking ? '1.5%' : '5%' };
	display: ${ ({$booking}) => $booking ? 'grid' : 'flex'};
	padding-bottom: ${ ({$booking}) => $booking ? '0' : '7%' };
	margin-bottom: 6%;

	@media (min-width: 768px) {
		padding-bottom: ${ ({$booking}) => $booking ? '0' : '2%' };
		margin-bottom: 8%;
	}
	@media (min-width: 1024px) {
		padding-bottom: 0;
		margin-bottom: 10%;
	}
`
export default function Hero (props) {
	const navigate = useNavigate();
	const submitForm = () => navigate("/booking-page");
	return (
		<>
			<Section>
				<Background className='App main-background' $booking={props.booking} >{ props.booking ? (
					<Article >
						<Head1 className="head1" $booking={props.booking}
						>{specials.bookingTitie}</Head1>
					</Article>
					) : (null)}
					<GridContainer>
						{ props.booking ? (
							<CenterImage $booking={props.booking}>
								<Image className="form-image" src={hero1} alt="hero image 1"/>
							</CenterImage>
							) : (
							<Article>
								<Head1 className="head1" >{specials.title}</Head1>
								<Head2 className="head2" >{specials.location}</Head2>
								<Paragraph className="paragraph">{specials.description}</Paragraph>
								<ButtonBox
									className="botton-box"
									$booking={props.booking}
									>
										<Button onClick={submitForm}>Reserve a table</Button>
								</ButtonBox>
							</Article>
						)}
						<CenterImage $booking={props.booking}>
							<Image className="hero-image" src={specials.image} alt="hero image 2"/>
						</CenterImage>
					</GridContainer>
				</Background>
			</Section>
		</>
	)
}
