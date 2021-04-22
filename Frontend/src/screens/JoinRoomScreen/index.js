import React, { createRef, useEffect, useState } from "react";
import styles from "./index.module.css";
import {w3cwebsocket} from "websocket";
import Room from "./components/Room"
import CreateRoomDialog from "./components/CreateRoomDialog";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import QUERY_ROOM_LIST from "../../Query/QUERY_ROOM_LIST";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPen, faSignOutAlt, faComments, faClipboard, faCommentAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import ip_address from "../../ip_address";
class JoinRoomScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {listOfRooms: [], showDialog: false, inputValue: ""}
        this.inputRef = createRef();
        this.client = new w3cwebsocket('ws://10.60.30.146:8000/ws/joinroomscreen/'); 


    }

    fetchData = async () => {
        const queryResult = await axios.post(ip_address, {query: QUERY_ROOM_LIST})
     
        const queryData = queryResult.data.data.roomList;
        console.log(queryData, "huhuh")
   
        
      
        this.setState({listOfRooms: queryData})
       
     
 

    }

    dynamicSearch = () => {
     
        return this.state.listOfRooms.filter(obj => obj.name.toLowerCase().includes(this.state.inputValue))

    }

    
    
    
    componentDidMount() {
        this.fetchData();
        this.client.onopen = () => {}
        this.client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
        
            if (!dataFromServer.delete_room){
            var tempListOfRooms = this.state.listOfRooms;
            tempListOfRooms.push(dataFromServer)
            this.setState({listOfRooms: tempListOfRooms})
            }
            else if (dataFromServer.delete_room){
                var tempListOfRooms = this.state.listOfRooms;
                tempListOfRooms = tempListOfRooms.filter(item => item.name !== dataFromServer.name)
                this.setState({listOfRooms: tempListOfRooms})
            }
        }
     


       
     
                
            
    
       
        

    }
    render(){
    return (
        <div>



            {this.state.showDialog &&
                <ReactConfirmAlert childrenElement={() => <CreateRoomDialog></CreateRoomDialog>} onClickOutside={() => {this.setState({showDialog: false})}}
                buttons = {[]}
               
                
                >
                    
                </ReactConfirmAlert>}
            <div className={styles.Screen}>
                <div className={styles.Containerintop}>
                    <input type={"text"} className={styles.Textinput} onChange={(e) => {this.setState({inputValue: e.target.value})}}></input>
                    <FontAwesomeIcon icon={faSearch} color={"white"} opacity={0.7} className={styles.Searchicon}></FontAwesomeIcon>
                </div>
                 <div className={styles.Centeredcontainer} id={"list"}>
                     {this.state.listOfRooms.length != 0 ? 
                 <div style={{width: "40%", minWidth: 400}}>
              
                {this.dynamicSearch().map(obj => {return(obj != "joinroomscreen" ? <Room roomName={obj.name} roomColor={obj.image}></Room> : null)})}
   
                 </div>
  :  <h2 style={{color: "white", opacity: 0.9}}>No rooms online at the moment</h2>  }
    
                </div>
    
    
                <div className={styles.Buttonbottomcontainer}>
    
                    <button className={styles.Buttonbottom}><p className={styles.Buttonbottomtext} onClick={() => {this.setState({showDialog: true})}}>Create Room</p></button>
                </div>
                
    
    
    
    
            </div>
        </div>
        
        
        
        )
    }
}

export default JoinRoomScreen;
