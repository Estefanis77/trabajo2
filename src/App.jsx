//import React from 'react';
import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact.jsx';

function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App