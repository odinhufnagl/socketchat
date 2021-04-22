
const USER_IS_IN_ROOM = `

query profileIsInRoom($roomName: String!, $profile: String!){
    
    profileIsInRoom(roomName:$roomName, profile:$profile)
    {
        id
    }
    }




`

export default USER_IS_IN_ROOM;

