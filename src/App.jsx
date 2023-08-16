import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Footer from './components/Footer';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <Wrapper>
      {/* <Header /> */}
      <Hero />
      <About />
      <Reviews />
      <Faq />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
