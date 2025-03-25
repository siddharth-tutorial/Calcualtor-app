
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './Home';
import State from './State';
import Counter from './Counter';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Calculator from './Calculator';
import Calculators from './Calculators';









function App() {
  return (
   <>
   <Routes>
    <Route path='/'element={<Home/>} />
    <Route path='/state' element={<State/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/calculator' element={<Calculator/>}/>
    <Route path='/calculators' element={<Calculators/>}/>
   
 
   
    

  
   
    
   </Routes>
   </>
  );
}

export default App;
