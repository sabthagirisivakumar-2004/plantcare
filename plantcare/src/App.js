import logo from './logo.svg';
import Signup from "./Autentication/newuser" 
import Signin from "./Autentication/Signin"
import Navi from "./Rout/Naivgator"
import Home from "./Pages/Homepage"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Signup/>}></Route>
  <Route path='/Signin' element={<Signin/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  
  </>

    
  );
}

export default App;
