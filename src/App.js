
import './App.css';
import Header from './Components/Header/Header';
import OrderReview from './Components/OrderReview/OrderReview';
import DashBoard from './Components/DashBoard/DashBoard';
import Shipping from './Components/Shipping/Shipping';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { createContext, useState } from 'react';
import AuthProvider from './Context/AuthProvider';





// export const userContext = createContext();

function App() {

  // const [user, setUser] = useState({
  //   isSignedIn: false,
  //   name: '',
  //   email: '',
  //   password: '',
  //   error: '',
  //   success: false,
  //   photoUrl: ''
  // })
  return (

    <AuthProvider>
      <Router>
        <Routes>
          {/* public-Route  */}
          <Route path="/home" element={<Header />} />
          <Route path="/review" element={<OrderReview />} />
          <Route path="/login" element={<Login />} />

          {/* private-Route  */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/shipping" element={<Shipping />} />
          </Route>
          {/* catchALL-Route  */}
          <Route exact path="/" element={<Header />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>


  );
}


export default App;
