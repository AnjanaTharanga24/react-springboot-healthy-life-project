import React from "react";
import "../css/navbar.css";
export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark ">
        <a className="navbar-brand text-white ms-3" href="#">
          Healthy Life
        </a>

        <a className="navbar-brand text-white ms-3" href="#">
          XXXXXXXXX
        </a>

        <a className="navbar-brand text-white ms-3" href="#">
          XXXXXXXXX
        </a>

        <a className="navbar-brand text-white ms-3" href="#">
          XXXXXXXXX
        </a>

        <div className="nav-buttons">
            <button className="btn btn-success" style={{marginRight:"20px"}}>Sigin</button>
            <button className="btn btn-warning text-white">Sigup</button>
        </div>
      
        
      </nav>
    </div>
  );
}
