import React from "react";
import "../css/navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark ">
        <img
          className="mt-2 mb-2"
          src={logo}
          style={{ width: "150px", height: "50px", marginLeft: "20px" }}
        />

        <div style={{marginLeft:"20px"}}>
          <a className="navbar-brand text-white ms-3" href="#">
            XXXXXXXXX
          </a>

          <a className="navbar-brand text-white ms-3" href="#">
            XXXXXXXXX
          </a>

          <a className="navbar-brand text-white ms-3" href="#">
            XXXXXXXXX
          </a>
        </div>

        <div className="nav-buttons">
          <Link to="/login">
          <button className="btn btn-success" style={{ marginRight: "20px" }}>
            Sigin
          </button>
          </Link>
          <Link to="/register">
          <button className="btn btn-warning text-white">Sigup</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
