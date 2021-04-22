import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { RoomImage } from '../../../../components/RoomImage'
import ip_address from '../../../../ip_address';
import MESSAGES_FROM_ROOM from '../../../../Query/QUERY_MESSAGES_FROM_ROOM';
import styles from "./index.module.css";
const Room = (props) => {
    const history = useHistory();
   

    return (
        <div className={styles.Container}>
            <div style={{display: "flex", flexDirection: "column",  alignItems: "center"}}>

            <RoomImage size={100} color={props.roomColor}></RoomImage>
            <button className={styles.Button} onClick={() => {history.push({
                pathname: "/chat/" +  props.roomName,
                state: {room_image: props.roomColor, room_name: props.roomName}
            
            })}}><p>Join Room</p></button>

            </div>
            <p className={styles.Text}>{props.roomName}</p>
            
        </div>
    )
}

export default Room;


