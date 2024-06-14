import { Link } from 'react-router-dom';
import styled from'styled-components'

const Navigations = styled.nav`
	list-style-type: none;
	padding-right: 17%;
	display: flex;
	text-align: end;
`
const Anchor = styled.li`
	flex: 1 1 auto;
	text-align: center;
	padding: 2%;
	text-decoration: none;
`

export default function Navigation () {
	return (
		<>
			<Navigations className='head3'>
				<Anchor><Link to="/">Home</Link></Anchor>
				<Anchor><Link to="/booking-page">Bookings</Link></Anchor>
				<Anchor><Link to="/about">About</Link></Anchor>
				<Anchor><Link to="/testimonial">Testimonial</Link></Anchor>
				<Anchor><Link to="/contact">Contact</Link></Anchor>
			</Navigations>
		</>
	)
}
