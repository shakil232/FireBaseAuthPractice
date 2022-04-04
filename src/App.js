
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
import { createContext, useState } from 'react';


export const userContext = createContext();

function App() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
    photoUrl: ''
  })
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Header />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </userContext.Provider>

  );
}


export default App;
