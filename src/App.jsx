import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import Navegador from './Components/Navegador';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.scss'
import EnlaceProvider from './Context/contexEnlace'
import Footer from './Components/Footer';

function App() {

  return (
    <Router>
      <EnlaceProvider >
        <Navegador/>
        <Public/>
        <Footer/>
      </EnlaceProvider >
    </Router>
  )
}

export default App
