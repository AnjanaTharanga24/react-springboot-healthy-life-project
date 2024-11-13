import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className=" card shadow main-card container mt-5">
        <div className="d-flex justify-content-center">
          <p className="fs-2 mt-4">Your Daily Calorie Goal  :</p>
          <p className="fs-2 ms-5 mt-4"> 2000 Kcal</p>
        </div>
      </div>

      <div className=" card shadow details-card container mt-5">
        <div className="d-flex justify-content-center">
         <h1 className="fs-2">Details</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
