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
        <h1 className='description'>As financially insecure students, we built this website to help people like ourselves get ahead and feel a little better about their future. </h1>
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
