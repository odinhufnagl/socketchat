import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import BulletinBoardScreen from "../screens/BulletinBoardScreen";
import ChatScreen from "../screens/ChatScreen";
import JoinRoomScreen from "../screens/JoinRoomScreen";
import "./index.css";

import NavBarNotLoggedIn from "../components/NavBarNotLoggedIn";
import LandingScreen from "../screens/LandingScreen";
import Landing from "../screens/ChatScreen/Landing";

export default function Routes() {

  
 
 
    return (



    
    <div className="Screen">
       


   
   <NavBarNotLoggedIn></NavBarNotLoggedIn>
 
   

    <div className="Route">

 
    
    <Switch>
        <Route path="/start" component={LandingScreen}></Route>
        <Route path="/joinroomscreen" exact component={JoinRoomScreen}></Route>
        <Route path="/bulletinboard" component={BulletinBoardScreen}></Route>
        <Route path="/chatscreen" component={ChatScreen}></Route>
    
        <Route path="/chat" component={Landing}></Route>
        <Route component={LandingScreen}></Route>
    </Switch>

    </div>

    </div>
  

    )
}