import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
