
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';

import Footer from './footer/Footer';
import AllRoutes from './Routes/AllRoutes';

// const Electronic=[
//   {
//     id:"1",
//     name:"Apple ",
//     image:"https://p.rmjo.in/productSquare/byeagjss-500x500.jpg",
//     category:"Mobile"
//   }
// ]
// git branc <fw____> day 3

// git checkout branchname
 
// git pull origin main
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
