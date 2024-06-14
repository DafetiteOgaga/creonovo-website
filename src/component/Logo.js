import logo from '../llemon_asset/creonovo.png'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
	padding-top: 1.2rem;
`
const LogoImage = styled.img`
	height: 2.5rem;

	@media (min-width: 480px) {
		height: 3rem;
	}
	@media (min-width: 768px) {
		height: 4rem;
	}
	@media (min-width: 1200px) {
		height: 5rem;
	}
`
export default function Logo () {
	return (
		<>
			<HeaderContainer>
				<LogoImage src={logo} alt="page logo" />
			</HeaderContainer>
		</>
    )
}
