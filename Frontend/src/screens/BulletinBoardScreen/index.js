import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

import { faImages, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import CreateNote from "./CreateNote";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Draggable from "react-draggable";
import { Responsive, WidthProvider } from "react-grid-layout";
import Note from "./components/Note";
import styles from "./index.module.css"

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const BulletinBoardScreen = (props) => {
    

   
    const [mounted, setMounted] = useState(false);

    const [img, setImg] = useState('url("https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg")');
    const [showDialog, setShowDialog] = useState(false);
    const inputRef = useRef();
    const [allDialogs, setAllDialogs] = useState([{note: "hello world", x: 10, y: 10, style: "big"}]);
    const [tempstate, setTempState] = useState(0);
    var y = Math.ceil(Math.random() * 4) + 1;
    const [preKey, setPreKey] = useState(0);
    

    useEffect(() => {setMounted(true)}, []);
  


    const imageHandler = (e) => {
     

        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImg("url(" + reader.result + ")");
            }
        }
        reader.readAsDataURL(e.target.files[0])
      
    }
   


    return (



     
        <div>
            

            {showDialog &&
            <ReactConfirmAlert onClickOutside={() => {setShowDialog(false)}} childrenElement={() => <CreateNote saveNote={(obj) => {const copy = allDialogs; copy.push(obj);setAllDialogs(copy)}} closeDialog={() => {setShowDialog(false)}}></CreateNote>}
            buttons = {[]}
           
            
            >
                
            </ReactConfirmAlert>}

        <div className={styles.Image} style={{backgroundImage: img}}>


        <ResponsiveReactGridLayout 
        rowHeight={30}
        className="layout"
          
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        
        useCSSTransforms={mounted}
        compactType={null}
       
        measureBeforeMount={false}>
       {allDialogs.map((obj, ind) =>
             <div 
            className={`${styles.Note} ${obj.style == "big" ? styles.Bignote : obj.style == "small" ? styles.Smallnote : styles.Standardnote}`} key={ind.toString()} data-grid={{x: 0, y: 0, w: 2, h: 7, i: ind.toString()}}>
           <Note key={ind.toString()} object={obj} delete={() => {allDialogs.splice(ind, 1); setTempState(tempstate+1)}}></Note>
           </div>)}
  
           
            
          
         
        </ResponsiveReactGridLayout>
        </div>

              <div className={styles.Allbuttons}>
                  <input type="file" name="image-upload" id={styles.input} accept="image/*" ref={inputRef} onChange={imageHandler}></input>
                  
                   <button className={styles.Buttonbottomright} onClick={() => {inputRef.current.click()}}>
                       <FontAwesomeIcon icon={faImages} style={{alignSelf: "center", marginRight: 10}}></FontAwesomeIcon>
                       <p className={styles.Buttontext}>Change image</p>
                   </button>
                   <button className={styles.Buttonbottomright} onClick={() => {setShowDialog(true)}}>
                   <FontAwesomeIcon icon={faPen} size={20} style={{alignSelf: "center", marginRight: 10}}></FontAwesomeIcon>
                       <p className={styles.Buttontext}>Add note</p>
                   </button>
        </div>


              </div>
        
     

        
        
        
        )
}

export default BulletinBoardScreen;









