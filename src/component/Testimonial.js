import famous from "../llemon_asset/famous.jpg"
import paul from "../llemon_asset/paul.jpg"
import debby from "../llemon_asset/debby.jpg"
import mayor from "../llemon_asset/mayor.jpg"
import star from "../llemon_asset/star"
import styled from "styled-components"

const specials = [
	{
		image: famous,
		name: "Famous",
		remark: "Excellent!",
		description: `Creonovo is incredible and simply
			the best. I love how it operates, customer 
			service, etc.`,
		rating: 5,
		stars: [star, star, star, star, star],
	},
	{
		image: paul,
		name: "Paul",
		remark: "Amazing!",
		description: `I've been eating at Creonovo for a few
			years now. What a wonderful place.`,
		rating: 4,
		stars: [star, star, star, star, star],
	},
	{
		image: debby,
		name: "Debby",
		remark: "Beautiful!",
		description: `I started eating at Creonovo
			few weeks ago and i haven't been able to
			stop coming here.`,
		rating: 4,
		stars: [star, star, star, star, star],
	},
	{
		image: mayor,
		name: "Mayor",
		remark: "Awesome!",
		description: `Thanks to Creonovo i can now I can order
			for deliveries online.`,
		rating: 5,
		stars: [star, star, star, star, star],
	},
]
const Section = styled.section``
const FlexContainer = styled.div`
	display: flex;
	flex-direction: ${ ({$vertical}) => $vertical ? 'column' : 'row' };
	justify-content: ${ ({$noHorAlign}) => $noHorAlign ? 'start' : 'center' };
	align-items: ${ ({$NoVertAlign}) => $NoVertAlign ? 'none' : 'center'};
	padding-top: ${ ({$noPad}) => $noPad ? '8%' : '0'};

	@media (max-width: 1000px) {
		padding-top: ${ ({$noPad}) => $noPad ? '8%' : '0'};
	}
`
const Image = styled.img`
	width: ${ ({$hlight}) => $hlight ? '9%' : '70%'};
	height: ${ ({$hlight}) => $hlight ? '9%' : '140%'};
	border-radius: ${ ({$curve}) => $curve ? '5rem' : '0'};

	// @media (max-width: 1119px) {
	// 	width: ${ ({$hlight}) => $hlight ? '11%' : '100%'};
	// 	height: ${ ({$hlight}) => $hlight ? '11%' : '125%'};
	// }
	// @media (max-width: 1000px) {
	// 	width: ${ ({$hlight}) => $hlight ? '10%' : '100%'};
	// 	height: ${ ({$hlight}) => $hlight ? '10%' : '125%'};
	// }
	// @media (max-width: 740px) {
	// 	width: ${ ({$hlight}) => $hlight ? '12%' : '70%'};
	// 	height: ${ ({$hlight}) => $hlight ? '12%' : '125%'};
	// }
	// @media (max-width: 642px) {
	// 	width: ${ ({$hlight}) => $hlight ? '11%' : '70%'};
	// 	height: ${ ({$hlight}) => $hlight ? '11%' : '125%'};
	// }
	// @media (max-width: 597px) {
	// 	width: ${ ({$hlight}) => $hlight ? '10%' : '70%'};
	// 	height: ${ ({$hlight}) => $hlight ? '10%' : '125%'};
	// }
	// @media (max-width: 480px) {
	// 	width: ${ ({$hlight}) => $hlight ? '10%' : '100%'};
	// 	height: ${ ({$hlight}) => $hlight ? '10%' : '130%'};
	// }
`
const Head1 = styled.h1`
	color: white;
	margin-bottom: 4%;
`
const LightBackground = styled.div`
	background-color: #EDEFEE;
	height: 100%;
	width: 25%;
	border-radius: .5rem;
	padding: 1% .5%;
	margin-right: 1%;
	margin-left: 1%;

	// @media (max-width: 1000px) {
	// 	width: 17%;
	// }
	// @media (max-width: 740px) {
	// 	width: 21%;
	// }
	// @media (max-width: 480px) {
	// 	width: 24%;
	// }
`
const Head3 = styled.h3`
	margin: 0 0;
	color: #444645;
`
const Paragraph = styled.p`
	margin-top: 0;
`
const Background = styled.div`
	height: auto;
	min-height: 10vh; /* Default minimum height */
	padding-top: 5%;
	padding-bottom: 5%;
`
export default function Testimonial () {
	return (
		<>
			<Section>
				<Background className='App main-background'>
					<FlexContainer>
						<Head1 className="head1">Testimonials</Head1>
					</FlexContainer>
					<FlexContainer>
					{specials.map((special, index) => (
						<LightBackground key={index}>
							<FlexContainer $noPad $noHorAlign>
								<Head3 className="head3">Rating:</Head3>
								{Array.from({ length: special.rating }).map((_, starIndex) => (
									<Image key={starIndex} $hlight src={star} alt="star logo" />
								))}
							</FlexContainer>
							<FlexContainer style={{gap: '6%'}} $noPad $noHorAlign>
								<Image
									$curve
									style={{
										width: '60%',
									}}
									src={special.image} alt="my photo"
								/>
								{/* <Head3 className="head3">{special.remark}</Head3> */}
							</FlexContainer>
							<FlexContainer $NoVertAlign $noHorAlign $vertical $noPad>
								<Head3 className="head3">{special.name} Said:</Head3>
								<Paragraph className="paragraph">
									"{special.description}"
								</Paragraph>
							</FlexContainer>
						</LightBackground>
						))}
					</FlexContainer>
				</Background>
			</Section>
		</>
	)
}
