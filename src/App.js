
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';

import Footer from './footer/Footer';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
    <Footer/>
    
    </div>
  );
}

export default App;
