import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Forgotpassword(){

    return <div>
      <div className="main">Forgotpassword</div>
         <form className="form ">
        <div className="input ">
        <p >email</p>
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="email" className="" id="email" placeholder="type your email here ......." />

      </div>
      <button type="submit" style={{'width':'220px' , 'margin-top': '30px'}} className="button" >Request a reset link</button>

   
    </form>

    </div>
}