
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

import { faImages, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Draggable from "react-draggable";
import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./index.module.css";

const Note = (props) => {
    return(
    <div style={{justifyContent: "center"}}>
        <p className={styles.Textonnote}>{props.object.note}</p>
  
        <FontAwesomeIcon icon={faTrash} style={{top: 10, right: 10, position: "absolute"}} onClick={props.delete}></FontAwesomeIcon>
        </div>
    )








}

export default Note;