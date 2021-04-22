import React, { createRef } from 'react'
import styles from "./index.module.css";
import USER_IS_IN_ROOM from "../../../../Query/QUERY_USERS_FROM_ROOM";
import axios from "axios";
import CREATE_USER from '../../../../Mutations/MUTATION_CREATE_USER';
import CSS_COLOR_NAMES from "../../../../css_colors";
import ip_address from '../../../../ip_address';

const Dialog = (props) => {

    const inputNameRef = createRef();
    const inputImageRef = createRef();
    
    
    const joinRoom = async () => {
        if (inputNameRef.current.indexOf(' ') !== -1){
            alert("Name can not have spaces!")
          

        }
        else {
        
        const color = CSS_COLOR_NAMES[Math.floor((Math.random()*CSS_COLOR_NAMES.length))]
     
        const queryResult = await axios.post(ip_address, {query: USER_IS_IN_ROOM, variables: {roomName: props.room, profile: inputNameRef.current}})
   
        if (queryResult.data.data.profileIsInRoom.length == 0){
            
            
            props.gotoPage(inputNameRef.current, color);
        
            

        }
        else {
        
        alert("username is used in room already")
        }
    }
       
    }
    





    

    return (
        <div style={{display: "flex", justifyContent: "center", height: 300, flexDirection: "column", alignItems: "center"}}>
            <p style={{color: "black", fontSize: 30, fontWeight: "bold"}}>Enter a name</p>
            <input onChange={(e) => {inputNameRef.current = e.target.value}}className={styles.Inputindialog}></input>
     
          
            <button className={styles.Inputindialog} onClick={() => {joinRoom()}}>Enter room</button>
            </div>
    )
}

export default Dialog;

