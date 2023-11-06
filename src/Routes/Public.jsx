import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Portafolio from '../Pages/Portafolio'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Master from '../Pages/Master'
import Contactame from '../Pages/Contactame'

function Public() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portafolio" element={<Portafolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/master" element={<Master />} />
      <Route path="/contactame" element={<Contactame />} />
    </Routes>
  )
}

export default Public
