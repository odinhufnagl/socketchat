
import { faImages, faPen, faSignOutAlt, faComments, faClipboard, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import styles from "./index.module.css";
export const RoomImage = (props) => {

    
    return (
        <div className={styles.Container} style={{width: props.size, height: props.size, backgroundColor: props.color}}>
       
          
        
        </div>
    )
}

