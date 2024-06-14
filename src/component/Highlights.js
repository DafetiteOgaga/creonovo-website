import afangSoup from "../llemon_asset/afangSoup.jpg"
import EdikangIkongSoup from "../llemon_asset/EdikangIkongSoup2.jpg"
import atama from "../llemon_asset/atama.jpg"
import styled from "styled-components"
import deliveryLogo from "../llemon_asset/deliveryLogo.svg"
import { useNavigate } from 'react-router-dom';

const specials = [
	{
		image: afangSoup,
		name: "Afang Soup",
		price: 450,
		description: `Afang soup is a traditional Nigerian dish
						originating from the Efik and Ibibio people of
						southern Nigeria, particularly from the Cross
						River and Akwa Ibom states. It's a hearty and
						nutritious soup typically served with a starchy
						side like fufu, pounded yam, or garri.`,
		delivery: "Order a delivery",
	},
	{
		image: EdikangIkongSoup,
		name: "Edikang-Ikong Soup",
		price: 400,
		description: `Edikang Ikong soup is another traditional
						Nigerian dish from the southeastern region,
						particularly among the Efik and Ibibio people
						of Cross River and Akwa Ibom states. This
						soup is often served at festive occasions and
						celebrations.`,
		delivery: "Order a delivery",
	},
	{
		image: atama,
		name: "Atama Soup",
		price: 500,
		description: `Atama soup is a traditional Nigerian dish that
						originates from the Efik and Ibibio people of
						Cross River and Akwa Ibom states. It is a rich,
						flavorful, and nutritious soup, known for its
						distinctive aroma and taste`,
		delivery: "Order a delivery",
	},
]

const Section = styled.section``
const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 5%;
	margin-bottom: 2%;
`
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2%;
	margin-bottom: 3%;
`
const Image = styled.img`
	width: ${ ({$hlight})=> $hlight ? '100%' : '70%'};
	height: ${ ({$hlight})=> $hlight ? '100%' : '140%'};
	border-top-left-radius: ${ ({$hlight})=> $hlight ? '0.5rem' : '3.25rem'};
	border-top-right-radius: ${ ({$hlight})=> $hlight ? '0.5rem' : '3.25rem'};
	border-bottom-left-radius: ${ ({$hlight})=> $hlight ? '0' : '3.25rem'};
	border-bottom-right-radius: ${ ({$hlight})=> $hlight ? '0' : '3.25rem'};

	// @media (max-width: 1000px) {
	// 	height: 125%;
	// 	border-top-left-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	// 	border-top-right-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	// }
	// @media (max-width: 740px) {
	// 	height: 125%;
	// 	border-top-left-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	// 	border-top-right-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	// }
	// @media (max-width: 480px) {
	// 	height: 130%;
	// 	border-top-left-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	// 	border-top-right-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	// }
`
const Head1 = styled.h1`
	margin-bottom: 0;
`
const ButtonBox = styled.div`
	height: 110%;
	width: 50%;
	justify-self: end;
`
const Button = styled.button``
const LightBackground = styled.div`
	background-color: #EDEFEE;
	height: 100%;
	width: 27%;
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
	margin-right: 2%;
	margin-left: 2%;

	@media (max-width: 320px) {
		padding-bottom: 1%;
	}
`
const SpecialsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 5%;
`
const Head3 = styled.h3`
	color: #444645;
`
const Paragraph = styled.p`
	margin-top: 0;
`
const Background = styled.div``
export default function Highlights () {
	const navigate = useNavigate();
	const submitForm = () => navigate("/booking-page");
	return (
		<>
			<Section>
				<Background className='App'>
					<GridContainer>
						<Head1 className='head1'>Specials!</Head1>
						<ButtonBox
							className="botton-box"
							onClick={submitForm}>
								<Button>Online menu</Button>
						</ButtonBox>
					</GridContainer>
					<FlexContainer>
						{specials.map((special, index) => (
							<LightBackground key={index}>
								<Image $hlight src={special.image} alt={special.name} />
								<SpecialsContainer>
									<Head3 className='head3'>{special.name}</Head3>
									<Head3 className='head3' style={{ color: '#EE9972' }}>N{special.price}</Head3>
								</SpecialsContainer>
								<SpecialsContainer>
									<Paragraph className='paragraph'>{special.description}</Paragraph>
								</SpecialsContainer>
								<SpecialsContainer>
									<Paragraph className='paragraph'>{special.delivery}</Paragraph>
									<img
									style={{ width: '10%', paddingBottom: '10%' }}
									src={deliveryLogo}
									alt="delivery logo"
									/>
								</SpecialsContainer>
							</LightBackground>
						))}
					</FlexContainer>
				</Background>
			</Section>
		</>
	)
}
