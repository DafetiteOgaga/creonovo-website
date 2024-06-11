import styled from 'styled-components';

const Background = styled.div`
	background-color: #008080;
	color: white;
	border-radius: 1rem;
	padding: 8%;
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SpanText = styled.span`
	color: red;
`
const NotFound = () => {
	return (
        <div className='App'>
            <Background>
                <h1 className='head1'><SpanText>Oopsy! 404</SpanText></h1>
                <h2 style={{ color: 'white'}} className='head2'>Page Not Found</h2>
                <h4>My contact details are in the footer (below)</h4>
            </Background>
        </div>
    );
};

export default NotFound;
