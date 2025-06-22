import { Route,Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import TaxSlabs from "./TaxSlabs";
import About from "./About"
import Calculate from "./Calculate"
import TaxGuidePage from './TaxGuidePage';

function App() {
  return<Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/taxslabs" element={<TaxSlabs/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/calculate" element={<Calculate/>}/>
    <Route path="/taxguide" element={<TaxGuidePage/>}/>
       
  </Routes>
  
}

export default App;



