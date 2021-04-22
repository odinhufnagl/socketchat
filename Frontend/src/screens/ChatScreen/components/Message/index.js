import React from "react";
import styles from "./index.module.css";


const Message = (props) => {
  


       return (
       props.currentUser != props.data.user ? 
        <div className={styles.Bigcontainer}>
      


            <div style={{backgroundColor: props.data.image}}className={styles.Imageleft}></div>
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
            <div style={{backgroundColor: props.data.image}} className={styles.Imageright}></div>

            </div>




   
       )








}

export default Message;