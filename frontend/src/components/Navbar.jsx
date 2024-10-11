import React, { useContext, useState } from "react";
import "../css/navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
export default function () {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark ">
        <img
          className="mt-2 mb-2"
          src={logo}
          style={{ width: "150px", height: "50px", marginLeft: "20px" }}
        />

        <div style={{ marginLeft: "20px" }}>
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

        {!user && (
          <>
            <div className="nav-buttons">
              <Link to="/login">
                <button
                  className="btn btn-success"
                  style={{ marginRight: "20px" }}
                >
                  Sigin
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-warning text-white">Sigup</button>
              </Link>
            </div>
          </>
        )}

        {user && (
          <>
          
            <a href="/cart" className="text-white p-2 cart-icon">
              <i className="fas fa-shopping-cart shopping-cart"></i>
            </a>

            <div className="text-white user-icon d-flex align-items-center me-2" style={{marginLeft:"750px"}}>
              <i className="fas fa-user fs-5"></i>
              <span className="username text-white fs-5">{user.username}</span>
              <span className="dropdown-arrow text-white fs-5 ms-2" onClick={toggleDropdown}>▼</span>
              {dropdownOpen && (
                <div className="dropdown-content show">
                <li>
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="dropdown-item text-dark text-center"
                  >
                    Logout
                  </Link>
                </li>
                </div>
              )}
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
