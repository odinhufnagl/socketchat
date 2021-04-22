import React from 'react'
import styles from "./index.module.css"
import { createRef } from "react"
import { useHistory } from 'react-router';
import axios from "axios";
import MESSAGES_FROM_ROOM from "../../../../Query/QUERY_MESSAGES_FROM_ROOM";
import CSS_COLOR_NAMES from "../../../../css_colors";
import ip_address from '../../../../ip_address';
const CreateRoomDialog = (props) => {
    const inputNameRef = createRef("");
    const inputImageRef = createRef("");
    const history = useHistory();
 


    const checkIfRoomExist = async () => {
        console.log(inputNameRef.current)
        if (inputNameRef.current.indexOf(' ') !== -1){
            alert("Name can not have spaces!")
          

        }
        else {
           
     
        const queryResult = await axios.post(ip_address, {query: MESSAGES_FROM_ROOM, variables: {roomName: inputNameRef.current}})
        console.log(queryResult)
      
        const color = CSS_COLOR_NAMES[Math.floor((Math.random()*CSS_COLOR_NAMES.length))]
 
        if(queryResult.data.data.fromRoom.length == 0){
            history.push({
                pathname: "/chat/" + inputNameRef.current,
                state: {room_image: color, room_name: inputNameRef.current},
            });
        }
        else {
            alert("room already exist")
        }
    }
        
    }
  
     
    return (
        <div style={{display: "flex", justifyContent: "center", height: 300, flexDirection: "column", alignItems: "center"}}>
            <p style={{color: "black", fontSize: 30, fontWeight: "bold"}}>Enter a groupname</p>
            <input onChange={(e) => {inputNameRef.current = e.target.value}}className={styles.Inputindialog}></input>
       
          
            
            <button className={styles.Inputindialog} onClick={() => {checkIfRoomExist()}}
        
        
        >Create room</button>
            </div>
    )
}

export default CreateRoomDialog;