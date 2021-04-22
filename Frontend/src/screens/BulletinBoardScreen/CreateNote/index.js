import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

import { faImages, faPen } from "@fortawesome/free-solid-svg-icons";

import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { text } from "@fortawesome/fontawesome-svg-core";
import styles from "./index.module.css";
import la from "../../../"

const CreateNote = (props) => {

    const textAreaRef = useRef();
    const [notebigMarked, setNotebigMarked] = useState(true);
    const [notesmallMarked, setNotesmallMarked] = useState(false);
    const [notestandardMarked, setNotestandardMarked] = useState(false);
    const [currentStyle, setCurrentStyle] = useState("big");
    const [w, setW] = useState(3);
    const [h, setH] = useState(7);

    return (




        <div className={styles.Container}>
            <h2>Add Note</h2>
           
        
            <textarea className={styles.Textarea} ref={textAreaRef}></textarea>
            <div style={{flexDirection: "row"}}>

            <div className={styles.Container_choose_style}>
              
               <div className={`${styles.Notebig} ${notebigMarked ? styles.Marked : null}` } onClick={() => {setNotebigMarked(true);setNotesmallMarked(false); setNotestandardMarked(false); setCurrentStyle("big")}}></div>
               <div className={`${styles.Notesmall} ${notesmallMarked ? styles.Marked : null}` } onClick={() => {setNotesmallMarked(true); setNotebigMarked(false); setNotestandardMarked(false); setCurrentStyle("small")}}></div>
               <div className={`${styles.Notestandardcontainer} ${notestandardMarked ? styles.Marked : null}`} onClick={() => {setNotestandardMarked(true); setNotesmallMarked(false); setNotebigMarked(false); setCurrentStyle("standard")}}>
                   <div className={styles.Notestandard}></div>
               </div>

            </div>
            <button className={styles.Button} onClick={() => {props.saveNote({note: textAreaRef.current.value, style: currentStyle, h: h, w: w}); props.closeDialog()}}><p>Create Note</p></button>
            <button className={styles.Button} onClick={() => {props.closeDialog()}}><p>Cancel</p></button>
            </div>
          
        </div>
        
        
        )
}

export default CreateNote;

