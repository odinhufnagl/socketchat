import React, { createRef, useEffect } from "react";
import styles from "./index.module.css";

import {w3cwebsocket} from "websocket";
import Message from "../../../ChatScreen/components/Message";
import { RoomImage } from "../../../../components/RoomImage";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import { faImages, faPen, faSignOutAlt, faComments, faClipboard, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageMini from "./MessageMini";

const ChatScreenMini = () => {

    const handleMouse = (e) => {
     
        let xAxis = (window.innerWidth / 2 - e.pageX)/ 20;
        let yAxis = (window.innerHeight / 2 - e.pageY)/ 20;
        var card = document.getElementById("card")


        if (card !== null && card !== undefined){
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
}


useEffect(() => {

    var card = document.getElementById("card")
    var container = document.getElementById("container")
 
   
    if (container !== null) {
    container.addEventListener("mousemove", handleMouse)
    }
    container.addEventListener("mouseenter", (e) => {
        card.style.transition = "none";
     
     

    })
    container.addEventListener("mouseleave", (e) => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`
   

    })
    }, [])
    




    return (
        <div>

    
        <div className={styles.Screen}>
    
                    <div className={styles.Containerintop}>
                    <div className={styles.Container} style={{width: 30, height: 30}}>
            <FontAwesomeIcon icon={faCommentAlt} style={{fontSize: 18, color: "rgb(255, 255, 255, 0.9)", marginTop: 4}}></FontAwesomeIcon>
          
        
        </div>
                      <p className={styles.Roomname}>Chatroom1</p>
                      <p style={{position: "absolute", right: 0, fontSize: 12}}>21 other users</p>
    
                    </div>
    
               
            <div className={styles.Centeredcontainer} id={"list"}>
                <div style={{width: "60%", minWidth: 300}}>
          

                  
                    <MessageMini  data={{message: "hello", user: "elon", image: "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg"}} currentUser={"odin"} id={"message1"}></MessageMini>
                    <MessageMini  data={{message: "hi!", user: "odin", image: "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"}} currentUser={"odin"} id={"message2"}></MessageMini>
                    <MessageMini  data={{message: "Whats up?", user: "elon", image: "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg"}} currentUser={"odin"} id={"message3"}></MessageMini>
    
    

                  
                </div>
            
    
            
            </div>
    
            <div className={styles.Textinputcontainer}>
               
        
                    <input type="text" className={styles.Textinput} disabled={true} placeholder={"great. You?"}></input>
                    <p style={{fontSize: 13, fontFamily: "Roboto", color: "#4f89e0", fontWeight: "bold"}}>Send</p>
                     
               
            </div>
    
        </div>
        </div>

    )

    
    
      
}

export default ChatScreenMini;
