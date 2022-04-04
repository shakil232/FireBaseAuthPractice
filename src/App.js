
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faCoffee} />

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/header" element={ <Header/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/login" element={ <Login/>} />
        <Route exact path="/" element={ <Header/>} />
        <Route path="*" element={ <NotFound/>} />
      </Routes>
    </Router>
  );
}


export default App;
