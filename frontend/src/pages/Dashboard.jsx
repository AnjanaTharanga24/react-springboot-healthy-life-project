import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/dashboard.css";
import { UserContext } from "../components/UserContext";
const profileImg = require("../images/profile.png");

export default function Dashboard() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <div className=" card bg-dark text-white shadow main-card container mt-5">
        <div className="d-flex  justify-content-center">
          <p className="fs-2 mt-4">Your Daily Calorie Goal :</p>
          <p className="fs-2 ms-5 mt-4"> 2000 Kcal</p>
        </div>
      </div>

      <div className="  details-card container mt-5">
        <div className="d-flex">
          <div className="card bg-dark content-card1 ">
           <div>
            <img src={profileImg} className="profile-img" />
            <p className="fs-2 mt-3 text-white text-center">{user.name}</p>
           </div>
          </div>
          <div className="card bg-dark content-card2">

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
