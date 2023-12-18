import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Forgotpassword(){

    return <div className="main">
         <form className="form ">
      
        <p >Forgotpassword</p>
        <div className="input ">
        <p >email</p>
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="email" className="" id="email" placeholder="type your email here ......." />

      </div>
      <button type="submit" className="button">log in</button>

   
    </form>

    </div>
}