
const MESSAGES_FROM_ROOM = `



query fromRoom($roomName: String!){


    fromRoom(roomName: $roomName){
       messages{message, user, image}
       users{id}
       image
       id
       name
       

    }
    

}



`

export default MESSAGES_FROM_ROOM;

