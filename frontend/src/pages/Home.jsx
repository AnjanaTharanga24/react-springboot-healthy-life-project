import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/home.css";
import cardImage from "../images/height.png";
import cardImage1 from "../images/age.png";
import cardImage2 from "../images/weight.png";
import cardImage3 from "../images/goalweight.png";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import Swal from "sweetalert2";

export default function Home() {
  const {user} = useContext(UserContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "",
    goalWeight: "",
    gymStatus: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const transformedAnswers = {
        ...answers,
        age: parseInt(answers.age, 10),
        height: parseFloat(answers.height),
        weight: parseFloat(answers.weight),
        goalWeight: parseFloat(answers.goalWeight),
        gender: answers.gender.toUpperCase(),
      };

      console.log("Sending data to server:", transformedAnswers);
      const response = await axios.post(`http://localhost:8082/users/${user.id}/answers`, transformedAnswers);
      console.log("Response from server:", response.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Submitted successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500
      });
      console.error("Error submitting answers:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };


  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="card question-card shadow">
            <div className="" style={{ marginTop: "30px" }}>
              <p className="q-card-tile">select your goal..</p>

              <div className="p-4">
                {["Lose weight", "Gain weight", "Maintain weight"].map((goal) => (
                  <div key={goal} className="card q-card" onClick={() => handleInputChange({ target: { name: "goal", value: goal } })}>
                    <p className={`q-card-tile-text ${answers.goal === goal ? "selected" : ""}`}>{goal}</p>
                  </div>
                ))}
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
                {["Male", "Female"].map((gender) => (
                  <div key={gender} className="card q-card" onClick={() => handleInputChange({ target: { name: "gender", value: gender } })}>
                    <p className={`q-card-tile-text ${answers.gender === gender ? "selected" : ""}`}>{gender}</p>
                  </div>
                ))}
              </div>

              <div className="d-flex btn-field p-3" style={{marginRight:"400px"}}>
                <button
                  className="btn btn-dark previous-btn mb-4"
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
              <img
                src={cardImage1}
                alt="Age"
                style={{
                  width: "320px",
                  height: "200px",
                  marginTop: "-40px",
                  marginLeft: "27px",
                }}
              />
              <p className="q-card-tile" style={{ marginBottom: "5px" }}>
                Enter your age..
              </p>

              <input
                type="number"
                className="form-control w-75 ms-5"
                placeholder="Enter age"
                name="age"
                value={answers.age}
                onChange={handleInputChange}
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
                  style={{width:"300px"}}
                >
                  Next
                  <FontAwesomeIcon className="ms-2" icon={faCircleArrowRight} />
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="card question-card shadow">
            <div className="" style={{ marginTop: "50px" }}>
              <img
                src={cardImage}
                alt="Height"
                style={{
                  width: "320px",
                  height: "200px",
                  marginTop: "-40px",
                  marginLeft: "50px",
                }}
              />
              <p className="q-card-tile" style={{ marginBottom: "5px" }}>
                Enter your height..
              </p>

              <input
                type="number"
                className="form-control w-75 ms-5"
                placeholder="Enter height"
                name="height"
                value={answers.height}
                onChange={handleInputChange}
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

      case 5:
        return (
          <div className="card question-card shadow">
            <div className="" style={{ marginTop: "50px" }}>
              <img
                src={cardImage2}
                alt="Weight"
                style={{
                  width: "320px",
                  height: "200px",
                  marginTop: "-40px",
                  marginLeft: "10px",
                }}
              />
              <p className="q-card-tile" style={{ marginBottom: "5px" }}>
                Enter your weight..
              </p>

              <input
                type="number"
                className="form-control w-75 ms-5"
                placeholder="Enter weight"
                name="weight"
                value={answers.weight}
                onChange={handleInputChange}
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
      case 6:
        return (
          <div className="card question-card shadow">
            <div className="" style={{ marginTop: "10px" }}>
              <p className="q-card-tile" style={{ marginLeft: "53px" }}>
                Your activity level..
              </p>

              <div className="p-4">
                {["Active", "Moderately active", "Sedentary"].map((level) => (
                  <div key={level} className="card q-card" onClick={() => handleInputChange({ target: { name: "activityLevel", value: level } })}>
                    <p className={`q-card-tile-text ${answers.activityLevel === level ? "selected" : ""}`}>{level}</p>
                  </div>
                ))}
              </div>

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
      case 7:
        return (
          <div className="card question-card shadow">
            <div className="" style={{ marginTop: "50px" }}>
              <img
                src={cardImage3}
                alt="Goal Weight"
                style={{
                  width: "320px",
                  height: "200px",
                  marginTop: "-40px",
                  marginLeft: "20px",
                }}
              />
              <p className="q-card-tile" style={{ marginBottom: "5px" }}>
                Your goal weight..
              </p>

              <input
                type="number"
                className="form-control w-75 ms-5"
                placeholder="Enter goal weight"
                name="goalWeight"
                value={answers.goalWeight}
                onChange={handleInputChange}
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
      case 8:
        return (
          <div className="card question-card shadow">
          <div className="" style={{ marginTop: "60px" }}>
            <p className="q-card-tile"> Your Gym status..</p>

            <div className="p-4">
              {["Yes", "No"].map((status) => (
                <div key={status} className="card q-card" onClick={() => handleInputChange({ target: { name: "gymStatus", value: status } })}>
                  <p className={`q-card-tile-text ${answers.gymStatus === status ? "selected" : ""}`}>{status}</p>
                </div>
              ))}
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
                onClick={handleSubmit}
              >
                Submit
                <FontAwesomeIcon className="ms-2" icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
        );
      default:
        return null;
    }
  };

  return (
    <div  className="home-bg">
      <Navbar />
      <div >
      {renderStep()}
      </div>
      <Footer />
    </div>
  );
}