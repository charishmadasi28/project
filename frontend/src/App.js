import './App.css';
import Details from "./problems"
import Waste from './road';
import Block from './drainage';
import Crisis from './water'
import Regis from './login';
import Signin from './signup';
import Page from './home';
import Fpassword from './forgot';
// import Searchbar from './nav';
import { Pbstatement } from './sample2';
import { Problem } from './pbstate';
import { Input } from './collection/input/input';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Page/>}/>
     <Route path='/prom' element={<Details/>}/>
     <Route path='/road' element={<Waste/>}/>
     <Route path='/drainage' element={<Block/>}/>
     <Route path='/water' element={<Crisis/>}/>
     <Route path='/login' element={<Regis/>}/>
     <Route path='/signup' element={<Signin/>}/>
     <Route path='/fpass' element={<Fpassword/>}/>
     <Route path='/pbstatement' element={<Pbstatement/>}/>
     <Route path='/pv' element={<Problem/>}/> 
     {/* <Route path='/' element={<Page/>}/>
     {/* <Route path='/' element={<Searchbar/>}/> */}
     <Route path='/input' element={<Input/>}/>
      </Routes>   
    </BrowserRouter>
    </>
  );
}

export default App;