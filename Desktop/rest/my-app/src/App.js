import logo from './logo.svg';
import './App.css';

import Header from './containers/Header/Header';
import AboutUs from './containers/AboutUs/AboutUs';
import Navbar from './components/Navbar';
import SpecialMenu from './containers/Menu/SpecialMenu';
import Chef from './containers/Chef/Chef';
import Intro from './containers/Intro/Intro';
import Laurels from './containers/Laurels/Laurels';
import Gallery from './containers/Gallery/Gallery';
import FindUs from './containers/FindUs/FindUs';
import Footer from './containers/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs/>
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  );
}

export default App;
