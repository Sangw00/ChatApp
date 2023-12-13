/*import {logo} from "./Auth/logo.png"*/

export default function Chat(){

    return <div>
        <div className="sidebar col-sm-4">
        <div className="logo row">
        
        </div>
        <div className="search row">
        <input type="text" className="input" id="search" placeholder="Find someone ......" />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}} />

        </div>
        <div className="users row">
        </div>
        </div>
        <div className=" chat col-sm-8">
        
        </div>
    </div>
}