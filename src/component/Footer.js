import footlogo from '../llemon_asset/footerLogo.png'
import styled from 'styled-components'
import MonthandYear from './MonthandYear'

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 0 1.5rem;
	padding-top: 2rem;
	gap: 2%;
`
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	padding: 0 2.6%;
	font-size: 90%;
`
const LogoImage = styled.img`
	padding-top: 1.5%;
	height: 40px;

	@media (min-width: 480px) {
		height: 46px;
	}
	@media (min-width: 768px) {
		height: 65px;
	}
	@media (min-width: 1024px) {
		height: 70px;
	}
	@media (min-width: 1200px) {
		height: 80px;
	}
`
export default function Footer () {
	return (
		<div className='App'>
			<>
			<FooterContainer>
				
				<LogoImage src={footlogo} alt="footer logo" />
				<GridContainer>
				<div>
						<p className='paragraph'>
							<span>Privacy Policy</span><br></br>
							<span>Terms of Service</span><br></br>
						</p>
					</div>
				
				
					
					<div>
						<p className='paragraph'>
							<span><a href='https://github.com/DafetiteOgaga'>GitHub</a></span><br></br>
							<span><a href='https://www.linkedin.com/in/ogagadafetite/'>LinkedIn</a></span><br></br>
							<span><a href='https://x.com/dafetite_ogaga'>X (Twitter)</a></span><br></br>
							<span><a href='https://web.facebook.com/ogaga01'>Facebook</a></span><br></br>
							</p>
					</div>
							<div>
						<p className='paragraph'>
							<span><a href='https://medium.com/@ogagadafetite'>Medium</a></span><br></br>
							<span><a href='https://stackoverflow.com/users/19809880/dafetite'>Stackoverflow</a></span><br></br>
							<span><a href='https://www.figma.com/files/team/1371771369221734563/recents-and-sharing/recently-viewed?fuid=1371771366746349296'>Figma</a></span><br></br>
							<span><a href='https://hashnode.com/@Dafetite'>Hashnode</a></span>
						</p>
					</div>
					<div>
						<p className='paragraph'>
							<span>Address: Lagos State</span><br></br>
							<span>Phone: +234(0) 803 809 1572</span><br></br>
							<span><a href='mailto: ogagadafetite@gmail.com'>Email me</a></span><br></br>
							<span>Hours: 9am - 8pm</span>
						</p>
					</div>
				</GridContainer>
			</FooterContainer>
			</>
			<MonthandYear /><br></br>
		</div>
    );
}
