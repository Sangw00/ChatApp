import logo from "./logo.png";
import Signin from "./Signin";

export default function Card() {
  return (
    <div className="card container">
        
      <div className="col-sm-6 ">
        <img src={logo} alt="logo" />
      </div>

      <div className="col-sm-6">
      <Signin/>
      </div>
    </div>
  );
}
