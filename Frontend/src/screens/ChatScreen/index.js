import React, { createRef } from "react";
import styles from "./index.module.css";
import {faLiraSign, faPaperPlane, faTshirt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {w3cwebsocket} from "websocket";
import Message from "./components/Message";
import { RoomImage } from "../../components/RoomImage";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import Dialog from "./components/Dialog";
import NavBarLoggedIn from "../../components/NavBarLoggedIn";
import MESSAGES_FROM_ROOM from "../../Query/QUERY_MESSAGES_FROM_ROOM";
import axios from "axios";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import ip_address from "../../ip_address";


const ChatScreen = () => {

    const history = useHistory()
    const location = useLocation()
    return (<ChatScreen2 history={history} location={location}></ChatScreen2>)
}
class ChatScreen2 extends React.Component {
    constructor(props){
        super(props)
      
        this.inputRef = createRef();
        this.inputDialogRef = createRef();
        

        if(this.props.location.state !== undefined)
        {
        
          this.user_image = this.props.location.state.user_image;
          this.user_name = this.props.location.state.user_name;
          this.room_image = this.props.location.state.room_image;
     
  
          this.room_name = this.props.location.state.room_name;
          this.setState({logged_in:true})
    
       }
        
       
    
       
      
        
        this.state = {messages: [], room:  this.room_name, user: this.user_name, inputValue: "", image: this.user_image, all_users: 0, room_image: this.room_image, logged_in: false, end: 10, all_messages: []}
    
        if(this.props.location.state !== undefined){
        this.client = new w3cwebsocket('ws://10.60.30.146:8000/ws/chatscreen/' + this.state.room + '/' + this.state.user + '/' + this.state.room_image + '/' + this.state.image + '/'); 
    }
    
    
}


fetchData = async () => {
   

    this.setState({end: Math.min(this.state.end, this.state.all_messages.length)})
    var queryData = this.state.all_messages.slice(this.state.all_messages.length - Math.min(this.state.end, this.state.all_messages.length), this.state.all_messages.length)
        this.setState({messages: queryData, end: this.state.end + 1})
  
  
    
    
    
}

fecthData_firsttime = async () => {
    
    const queryResult = await axios.post(ip_address, {query: MESSAGES_FROM_ROOM, variables: {roomName: this.state.room}})

    
    if (queryResult.data.data.fromRoom.length > 0){
        var queryData = queryResult.data.data.fromRoom[0].messages;
        this.setState({all_messages: queryData})
      
        this.setState({end: Math.min(this.state.end, this.state.all_messages.length)})
        var queryData = this.state.all_messages.slice(this.state.all_messages.length - Math.min(this.state.end, this.state.all_messages.length), this.state.all_messages.length)
 
        this.setState({messages: queryData, end: this.state.end + 4})
        
      
    }
    
    
}
    fetchOnlyUsers = async () => {
        const queryResult = await axios.post(ip_address, {query: MESSAGES_FROM_ROOM, variables: {roomName: this.state.room}})
        console.log(queryResult, "hllo")
        if (queryResult.data.data.fromRoom[0] !== undefined) {
        const queryData = queryResult.data.data.fromRoom[0].users;
        this.setState({all_users: queryData.length === 0 ? 0 : queryData.length - 1})
        }
        else {
            this.setState({all_users: 0})
        }
    }

    gotoBottom = () => {
        var list = document.getElementById("list");
        list.scrollTop = list.scrollHeight;   

    }

    




  


componentDidMount() {
  
    
    if(this.props.location.state === undefined)
    {
        
        this.props.history.push("/joinroomscreen/")    
  
        
    } 
    if (this.props.location.state !== undefined){
        
        this.fecthData_firsttime();
    
        this.fetchOnlyUsers();
        this.gotoBottom();
        window.addEventListener('popstate', (e) => {
            
          
            this.props.history.push("/joinroomscreen/")
            window.location.reload()
        })
        var list = document.getElementById("list");
    
   
    
        this.cur_deltaY = 0;
    list.addEventListener("wheel", (e) => {
        if (e.deltaY < this.cur_deltaY && list.scrollTop == 0){ 
         
            this.cur_deltaY -= 10
            this.fetchData()
        }})
   

    

    
             

       
    this.client.onopen = () => { 
        console.log("connected with socket")
      
    }
    
    this.client.onmessage = (message) => {
      
     
        const dataFromServer = JSON.parse(message.data);
        if (dataFromServer && 'add_user' in dataFromServer){
            
            this.fetchOnlyUsers()
           
 

        }
        
        else if (dataFromServer){
            const temp = this.state.messages;
            const temp2 = this.state.all_messages;
            
            temp.push(dataFromServer);
            temp2.push(dataFromServer);
            this.setState({
                messages: temp,
                all_messages: temp2
                
            })        
    }   
    this.gotoBottom()   
}         
}

}


    postMessage = () => {
        this.client.send(
            JSON.stringify({message: this.state.inputValue, user: this.state.user, image: this.state.image})
        )
        this.setState({inputValue: ""})
        this.inputRef.current.value = ""
        

        
     }




render() {
    return (
        <div>
    
        <div className={styles.Screen}>
            <NavBarLoggedIn></NavBarLoggedIn>
            <div className={styles.Containerintopparent}>

                    <div className={styles.Containerintop}>
                 
                     <div style={{display: "flex", alignItems: "center"}}>

                      <RoomImage color={this.state.room_image}></RoomImage>  
                      <p className={styles.Roomname}>{this.state.room}</p>
                     
                     </div>
                      <p className={styles.Roomusers}>{this.state.all_users} other user(s)</p>
    
                    </div>
            </div>
    
    
            <div className={styles.Centeredcontainer} id={"list"}>
                <div style={{width: "40%"}}>
                    {this.state.messages.map(obj => {return (<Message data={obj} currentUser={this.state.user}></Message>)})}
    
                </div>
            
    
            
            </div>
    
            <div className={styles.Textinputcontainer}>
               
        
                    <input type="text" className={styles.Textinput} ref={this.inputRef} onChange={(e) => {this.setState({inputValue: e.target.value})}}  onKeyPress={event => {if (event.key === "Enter") {this.postMessage()}}}></input>
                    <p style={{fontSize: 20, fontFamily: "Roboto", color: "#4f89e0", fontWeight: "bold"}} onClick={() => {this.postMessage()}}>Send</p>
                     
               
            </div>
    
        </div>
        </div>

    )
}
    
    
      
}

export default ChatScreen;
