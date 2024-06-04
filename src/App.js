
import './App.css';
import Navbar from './Components/Navbar';
import Plans from './Components/Pages/Plans';
import NotFound from './Components/Pages/NotFound';
import { useState } from 'react';
import Home from './Components/Home';
import Galery from './Components/Pages/Galery';
import Footer from './Components/Footer';
import {  Route, Routes } from 'react-router';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';

function App() {

  
  return (
    <>
    
        <Navbar />
       
    <Routes> 
    <Route path='/' element={<Home> </Home>}> </Route>
    <Route path='/about' element={<About></About>}> </Route>
    <Route path='/galery' element={<Galery></Galery>}> </Route>
    <Route path='/contact' element={<Contact/>}> </Route>
    <Route path='/*' element={<NotFound></NotFound>}></Route>
    <Route path='/plans' element={<Plans></Plans>}></Route>
    </Routes>
    
    <Footer></Footer>
    
    </>
  );
}

export default App