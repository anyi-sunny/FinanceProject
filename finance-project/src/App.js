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
      <About />
    </div>
  );
}

export default App;
