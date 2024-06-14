import styled from "styled-components"
import fruitLogo from "../llemon_asset/fruit.png"
import me from "../llemon_asset/dafetite.jpeg"

const Section = styled.section``
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2%;
	padding-top: 8%;
	margin-bottom: 3%;
`
const Image = styled.img`
	position: absolute;
	top: 0%;
	left: 52%;
`
const Image2 = styled(Image)`
	top: 30%;
	left: 17%;
	border-radius: 0.5rem;
	border-color: #495E57;
	border-style: solid;
	border-width: 2px;
`
const Head1 = styled.h1`
	margin-bottom: 0;
`
const Head2 = styled.h2`
	// font-size: 180%;
	margin-top: 0;
`
const Paragraph = styled.p`
	margin-top: 0;
`
const OverlappingImagesContainer = styled.div`
	position: relative;
	width: auto;
	height: auto;

	// @media (max-width: 1265px) {
	// 	width: 90%;
	// }
	// @media (max-width: 1000px) {
	// 	width: 80%;
	// }
`
const Background = styled.div`
	background-color: #EDEFEE;
	padding-bottom: 10%;
`
export default function About () {
	return (
		<>
			<Section>
				<Background className='App'>
					<GridContainer>
						<div>
							<Head1 className="head1">Creonovo</Head1>
							<Head2 className="head2">Lagos</Head2>
							<Paragraph className="paragraph">A traditional
							African restaurant known for its fresh and simple
							ingredients. It	typically includes ripe tomatoes,
							cucumbers, red onion, green bell pepper, Kalamata
							olives, and a block of feta cheese, all seasoned
							with dried oregano and drizzled with extra virgin
							olive oil.</Paragraph>
						</div>
						<OverlappingImagesContainer>
							<Image
								className="about-image"
								style={{
									width: '30%',
									}}
									src={fruitLogo}
									alt="lemon fruit photo"
							/>
							<Image2
								className="about-image"
								style={{
									width: '50%',
									}}
									src={me}
									alt="author photo"
							/>
						</OverlappingImagesContainer>
					</GridContainer>
				</Background>
			</Section>
		</>
	)
}
