import React from 'react'
import styles from "./index.module.css";
const MessageMini = (props) => {
  

    return (
    props.currentUser != props.data.user ? 
     <div className={styles.Bigcontainer}>
   


         <img src={props.data.image} style={{width: 25, height: 25, marginRight: 20, borderRadius: 50}}></img>
     <div className={styles.Container}>
        <p className={styles.Textname}>{props.data.user}</p>
         
         <p className={styles.Textmessage}>{props.data.message}</p>
         
         </div>

         </div>


    :

    <div className={styles.Bigcontainerright}>
   


     <div className={styles.Container}>
     <p className={styles.Textnameyou}>You</p>
         <p className={styles.Textmessage}>{props.data.message}</p>
         
         </div>
         <img src={props.data.image} style={{width: 25, height: 25, marginLeft: 20, borderRadius: 50}}></img>

         </div>





    )
}

export default MessageMini;
