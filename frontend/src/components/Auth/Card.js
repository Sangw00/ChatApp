import logo from "./logo.png";
import Signin from "./Signin";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function Card() {
  return (
    <div className="card container">
        
      <div className="col-sm-6 ">
        <img src={logo} className="logoimg" alt="logo" />
      </div>
      <div className="col-sm-6">
<Signin/>
    </div>
    </div>
  );
}
