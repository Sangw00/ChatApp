import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
    return <div >
        <div className="main" >Sign up</div>
        <form className="form ">

      <div className="input ">
        <p >name</p>
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="text" className="" id="email" placeholder="your name" />
      </div>

    <div className="input ">
        <p >email</p>
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="email" className="" id="email" placeholder="exemple@gmail.com" />
      </div>

      <div className="input ">
        <p >password</p>
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input type="password" className="" id="exampleInputPassword1" placeholder="**********" />
      </div>

      <div className="input ">
        <p >confirm password</p>
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input type="password" className="" id="exampleInputPassword1" placeholder="**********" />
      </div>

      <button type="submit" className="button">Register</button>
      
    </form>
    </div>
    
}