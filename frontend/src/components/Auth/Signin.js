import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signin() {

  return <div>
    <div className="main">Sign in</div>
    <form className="form ">
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

      <p>forgot password?</p>
      <button type="submit" className="button">Submit</button>
      <p>you don't have account?</p>
    </form>
  </div>

}