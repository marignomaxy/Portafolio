import { BrowserRouter as Router } from "react-router-dom";
import Public from "./Routes/Public";
import Navegador from "./Components/Navegador";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/styles.scss";
import EnlaceProvider from "./Context/contexEnlace";
import Footer from "./Components/Footer";
import "react-datepicker/dist/react-datepicker.css";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <EnlaceProvider>
          <Navegador />
          <Public />
          <Footer />
        </EnlaceProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
