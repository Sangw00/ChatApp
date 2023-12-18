/*import {logo} from "./Auth/logo.png"*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Chat(){

    return <div>
        <div className="sidebar col-sm-3">
        <div className="logo row">
        <img src="../../../logo.png" alt="logo" />
       
        </div>
        <div className="search row">
        <input type="text" className="input" id="search" placeholder="Find someone ......" />
        <FontAwesomeIcon icon={faSearch} style={{color: "#ffffff",}} />

        </div>
        <div className="users row">
            ggg
            <div className="scroll-bar"></div>
        </div>
        </div>
        <div className=" chat col-sm-9">
        
        </div>
    </div>
}