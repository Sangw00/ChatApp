import logo from "./logo.png";
import Forgotpassword from "./Forgotpassword";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function Card() {
  return (
    <div className="card container">
        
      <div className="col-sm-6 ">
        <img src={logo} className="logoimg" alt="logo" />
      </div>
      <div className="col-sm-6">
<Forgotpassword/>
    </div>
    </div>
  );
}
