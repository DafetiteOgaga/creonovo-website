import './App.css';
import About from './component/About';
import Navigation from './component/Navigation';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import BookingPage from './component/BookingPage';
import NotFound from './component/NotFound';
import Home from './component/Home';
import ConfirmedBooking from './component/ConfirmedBooking';
import Logo from './component/Logo';

import Hero from './component/Hero';
import Highlights from './component/Highlights';
import BookingForm from './component/BookingForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'


const MainContainer = styled.main``
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 1%;
  padding-bottom: 1%;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`

const BodyContainer = styled.div``
function App() {
  return (
    <MainContainer>
      <Router>
        <HeaderContainer className='App barBar'>
          <Logo />
          <Navigation />
        </HeaderContainer>
        <BodyContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking-page" element={<BookingPage/>} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/hero" element={<Hero />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/booking-form" element={<BookingForm />} />

          </Routes>
        </BodyContainer>
        <Footer className='App'/>
      </Router>
    </MainContainer>
  );
}

export default App;
