import { StrictMode } from 'react'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from 'react-dom/client'
import HomePage from './HomePage/HomePage';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './register/Register';
import Upload from './Photos/Upload';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      
 { <BrowserRouter>
 <Routes>
  <Route path='/register' element={<><Navbar/><Register/></>}></Route>
  <Route path='/login' element={<><Navbar/><Login/></>}></Route>
  <Route path='/' element={<><Navbar/><HomePage/></>}></Route>
  <Route path='/upload' element={<><Navbar/><Upload/></>}></Route>
 </Routes>

 </BrowserRouter> }
 
 


   
  </StrictMode>,
)
