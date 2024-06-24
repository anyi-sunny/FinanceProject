import './App.css';
import NavBar from './Components/NavBar'
import Carousel from './Components/Carousel';
import { slides } from './Components/Data'
import About from './Components/About'

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
      <About />
    </div>
  );
}

export default App;
