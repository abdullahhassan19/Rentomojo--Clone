
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';

import Footer from './footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Homepage/>
     
     <button style={{border:"2px solid black" }}>Package</button>
    <Footer/>
    
    </div>
  );
}

export default App;
