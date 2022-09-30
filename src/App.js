
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';

import Footer from './footer/Footer';
// <<<<<<< HEAD
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
// =======
// import Electronics from 
// >>>>>>> b1c7c7bf8c26dad9eade38a7f4e6e609773a8171

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
