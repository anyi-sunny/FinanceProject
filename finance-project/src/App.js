import './App.css';
import NavBar from './Components/NavBar'
import Carousel from './Components/Carousel';
import { slides } from './Components/Data'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <div>
        <Carousel images={ slides }/>
      </div>
      <div>
        <h1 className='description'>Here's a little tagline about our website. We are for students. We have resources. Donate us money please</h1>
      </div>
      <div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
