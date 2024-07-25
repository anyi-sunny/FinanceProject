import './App.css';
import NavBar from './Components/NavBar'
import Carousel from './Components/Carousel';
import { slides } from './Components/Data'
import Footer from './Components/Footer'
import { Link } from "react-router-dom";

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
        <h1>
          Featured Articles:
        </h1>
        <div className="grid-container">
                    <Link className='grid-item' to='/savecheck'>
                    <img src='images/checksave.png' alt='For Sixteen and Younger'/>
                    </Link>
                    <Link className='grid-item' to='/rothIRA'>
                        <img src='images/rothira.png' alt='For Sixteen to Eighteen' />
                    </Link>
      </div>
      </div>
      <div className='spacing'>
      
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
