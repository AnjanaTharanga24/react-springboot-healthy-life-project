import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/home.css";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="card question-card shadow">
        <div className="" style={{ marginTop: "50px" }}>
          <p className="q-card-tile">select your goal..</p>

          <div className="p-4">
            <div className="card q-card">
              <p className="q-card-tile-text">Lose weight</p>
            </div>
            <div className="card q-card">
              <p className="q-card-tile-text">Gain weight</p>
            </div>
            <div className="card q-card">
              <p className="q-card-tile-text">Maintain weight</p>
            </div>
          </div>

          <div>
            <button className="btn btn-success getstarted-btn fs-5">
              Get Started
              <FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
