import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Signup from "./Signup";
import Forgotpassword from "./Forgotpassword";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function Signin() {

  return (
    
    <BrowserRouter>
  <div >
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

      <p>forgot password? <Link className="link" to="/Forgotpassword">Reset password</Link></p>
      <button type="submit" className="button">log in</button>
      <p>you don't have account? <Link className="link" to="/Signup">Create one</Link></p>
      
    </form>

     
      <Routes>
      <Route path="/Forgotpassword" element={<Forgotpassword/>} >  </Route>
      <Route path="/Signup" element={<Signup/>} >  </Route>
      </Routes>
    
  </div>  
      </BrowserRouter>

   
 )
}
