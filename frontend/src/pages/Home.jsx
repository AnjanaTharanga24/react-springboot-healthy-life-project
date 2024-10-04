import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/home.css";
import cardImage from "../images/height.png"

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (e) => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = (e) => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
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
                <button
                  className="btn btn-success getstarted-btn fs-5"
                  onClick={handleNext}
                >
                  Get Started
                  <FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} />
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="card question-card shadow">
            <div className="" style={{ marginTop: "50px" }}>
              <p className="q-card-tile">Enter your gender..</p>

              <div className="p-4">
                <div className="card q-card">
                  <p className="q-card-tile-text">Male</p>
                </div>
                <div className="card q-card">
                  <p className="q-card-tile-text">Female</p>
                </div>
              </div>

              <div className="d-flex ms-3 p-3">
                <button
                  className="btn btn-dark previous-btn  mb-4"
                  onClick={handlePrevious}
                >
                  <FontAwesomeIcon className="me-2" icon={faCircleArrowLeft} />
                  Previous
                </button>
                <button
                  className="btn btn-success next-btn mb-4 ms-4"
                  onClick={handleNext}
                >
                  Next
                  <FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} />
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="card question-card shadow">
            <div className="" style={{ marginTop: "50px" }}>

                <img src={cardImage} style={{width:"320px",height:"200px" , marginTop:"-40px",marginLeft:"50px"}}></img>
              <p className="q-card-tile" style={{marginBottom:"5px"}}>Enter your age..</p>

              <input
                type="number"
                className="form-control w-75 ms-5"
                placeholder="Enter age"
              />

              <div className="d-flex ms-3 p-3 ">
                <button
                  className="btn btn-dark previous-btn  mb-4"
                  onClick={handlePrevious}
                >
                  <FontAwesomeIcon className="me-2" icon={faCircleArrowLeft} />
                  Previous
                </button>
                <button
                  className="btn btn-success next-btn mb-4 ms-4"
                  onClick={handleNext}
                >
                  Next
                  <FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} />
                </button>
              </div>
            </div>
          </div>
        );
    }
  };
  return (
    <div>
      <Navbar />
      {renderStep()}

      <Footer />
    </div>
  );
}
