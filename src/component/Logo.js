import logo from '../llemon_asset/creonovo.png'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	min-height: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;

	@media (max-width: 480px) {
		min-height: 10vh;
	}
`
const LogoImage = styled.img`
	height: 80px;

	@media (max-width: 1000px) {
		height: 650px;
	}
	@media (max-width: 740px) {
		height: 50px;
	}
	@media (max-width: 480px) {
		height: 45px;
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
