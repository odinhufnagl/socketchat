

const CREATE_USER = `
mutation createUser($roomName: String!, $userName: String!){
    createUser(roomName:$roomName, userName:$userName){__typename}
}






`

export default CREATE_USER;