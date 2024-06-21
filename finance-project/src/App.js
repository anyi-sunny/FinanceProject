import './App.css';
import NavBar from './Components/NavBar'
import Carousel from './Components/Carousel';
import { slides } from './Components/Data'

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <div>
        <Carousel images={ slides }/>
      </div>
    </div>
  );
}

export default App;
