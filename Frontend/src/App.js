
import './App.css';
import NavBarNotLoggedIn from './components/NavBarLoggedIn';
import history from "./Services/history";
import Routes from "./Routes";
import { Route, Router } from "react-router-dom";

import { useEffect } from 'react';
import LandingScreen from './screens/LandingScreen';


function App() {
 
  return (
    
     
   
      
      <Router history={history}>
       <div style={{position: "absolute", width: "100%", height: "100%"}}>

       <Routes></Routes>
       </div>
      </Router>
     
  );
}

export default App;
