import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/dashboard.css";
import { UserContext } from "../components/UserContext";
const profileImg = require("../images/profile.png");

export default function Dashboard() {
  const { user } = useContext(UserContext);
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
              <p className="fs-1 mt-3 text-white text-center">{user.name}</p>
              <p className="fs-3 mt-3 text-white text-center">{user.email}</p>
            </div>
          </div>
          <div className=" card bg-dark content-card2">
            <div className="d-flex  p-3 ms-3">
              <div className="text-white fs-4">
                <p>Goal :</p>
                <p>Gender :</p>
                <p>Age :</p>
                <p>Height :</p>
                <p>Weight :</p>
                <p>Activity Level :</p>
                <p>Goal Weight :</p>
                <p>Gym Status :</p>
              </div>

              <div className="text-white ms-5 fs-4">
                <p>xxxxxxxx</p>
                <p>xxxxxxxx</p>
                <p>xxxxxxx</p>
                <p>xxxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
                <p>xxxxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
