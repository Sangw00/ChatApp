import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Signup from "./Signup";
import Forgotpassword from "./Forgotpassword";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";

export default function Signin() {

const [email,setEmail]= useState("");
const [password,setPassword]= useState("");

const handleSubmit=(event)=>{
  event.preventDefault()
  fetch("http://192.168.2.255:8080/Login",{
    method: "POST"
  })
}

  return (
    
    <BrowserRouter>
  <div >
    <div className="main">Sign in</div>
    <form className="form" onSubmit={handleSubmit}>

      <div className="input ">
        <p >email</p>
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="email" className="" value={email} onChange={(event)=>setEmail(event.target.value)} id="email" placeholder="exemple@gmail.com" />
      </div>

      <div className="input ">
        <p >password</p>
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input type="password" className="" value={password} onChange={(event)=>setPassword(event.target.value)} id="exampleInputPassword1" placeholder="**********" />
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
