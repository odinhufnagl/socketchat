
import { useHistory } from 'react-router';
import React, { createRef, useEffect, useState } from "react";
import styles from "./index.module.css";
import {faLiraSign, faPaperPlane, faTshirt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {w3cwebsocket} from "websocket";


import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";

import Dialog from "../components/Dialog";
import {useLocation} from "react-router-dom";



import axios from "axios";

const Landing = () => {
  
    const history = useHistory();
    const location = useLocation();

    
    const gotoPage = (user, image) => {
       
    
        history.push({
            pathname: '/chatscreen/' + location.state.room_name + '/',
            state: {user_image: image, user_name: user, room_image: location.state.room_image, room_name: location.state.room_name}
           
        })

    }

  
  
    return (
        <div>

         
                <ReactConfirmAlert childrenElement={() => <Dialog room={window.location.href.split("/")[4]} gotoPage={(usr, img) => {gotoPage(usr, img)}}></Dialog>}
                buttons = {[]}
               
                
                >
                    
                </ReactConfirmAlert>

        </div>
    )
      
}

export default Landing;