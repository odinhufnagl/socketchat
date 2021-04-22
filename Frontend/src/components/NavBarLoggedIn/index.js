import { faImages, faPen, faSignOutAlt, faComments, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';
import { useHistory } from 'react-router';
const NavBarLoggedIn = () => {
  const history = useHistory();
 
  return (
    <div className="Container">
      
       <h1 className="Header">socketchat</h1>

       

       
     
       <button className="Btninheader">
                       <p className="Buttontext" onClick={() => {history.goBack(2) }}>Leave room</p>
                   <FontAwesomeIcon icon={faSignOutAlt} size={20} style={{alignSelf: "center", marginLeft: 10}}></FontAwesomeIcon>
                   </button>
      
   
        
    </div>
  );
}

export default NavBarLoggedIn;
