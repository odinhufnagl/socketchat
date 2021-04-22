import React, { useEffect } from 'react'
import ChatScreen from '../ChatScreen';
import JoinRoomScreen from '../JoinRoomScreen';
import ChatScreenMini from './components/ChatScreenMini';
import styles from "./index.module.css";
import NavBarNotLoggedIn from "../../components/NavBarNotLoggedIn"
import { useHistory } from 'react-router';

const LandingScreen= () => {

  const history = useHistory();
    
 
  
    return (

   
    

     <div className={styles.Screen}>



        <div className={styles.Uppercontainer}>
          
        
            <div className={styles.Upperleft}>

            <h2 style={{fontSize: 45, color: "rgb(255, 255, 255, 0.8)", width: 500}}>Chat with Family and Friend. In Real Time</h2>
            <button className={styles.Button} onClick={() => {history.push("/joinroomscreen/")}}><p style={{color: "#121212", fontWeight: 500, fontSize: 20}}>Start chatting</p></button>
            </div>
            <div id={"container"}className={styles.Chatscreencontainer}>

            <div id={"card"} className={styles.Card}>
                
          

                <ChatScreenMini></ChatScreenMini>
           
            
            </div>
            </div>
            
        </div>
     </div>
     
    )
}

export default LandingScreen;
