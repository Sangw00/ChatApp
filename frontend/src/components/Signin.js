import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faLockOpen }from "@fortawesome/free-solid-svg-icons";

export default function Signin() {
  return (
    <div className="card">
        
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>

      <form>
      <div className="main">Sign in</div>
  <div className="form-group">
    <label >Email </label>
    <FontAwesomeIcon icon={faUser} className="icon"  style={{color: "#296066",}} />
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemple@gmail.com"/>

  </div>
  <div className="form-group">
    <label >Password</label>
    <FontAwesomeIcon icon={faLock} className="icon" style={{color: "#296066",}} />
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="**********"/>
  
  </div>
  
 
  <button type="submit" className="button">Submit</button>
  <p>forgot password?</p>
</form>
      </div>
    </div>
  );
}
