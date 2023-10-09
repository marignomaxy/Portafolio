import {Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Portafolio from '../Pages/Portafolio';
import About from '../Pages/About';

function Public() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portafolio' element={<Portafolio/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Public