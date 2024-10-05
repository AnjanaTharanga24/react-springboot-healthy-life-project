import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function () {
  return (
    <div>
      <div className="">
        <Navbar />
        <div
          className="card shadow p-4"
          style={{
            width: "700px",
            height: "auto",
            marginLeft: "400px",
            marginTop: "50px",
            marginBottom: "-130px",
          }}
        >
          <form>
           
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
              />
            </div>
           
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <button type="submit" className="btn btn-danger">
                Cancle
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}
