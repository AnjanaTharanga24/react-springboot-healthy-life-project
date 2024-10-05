import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function () {
 const[user,setUser] = useState({
    name:"",
    email:"",
    username:"",
    password:""
 })
  const navigate = useNavigate();

  const handleChange = (e) =>{
    const {name,value} = e.target
    setUser(user => ({
        ...user,
        [name]:value
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response = await axios.post(`http://localhost:8082/users`,user)
        setUser(response.data)
        console.log("response data : " , response.data)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Registeres successfully",
            showConfirmButton: false,
            timer: 1500
          });
    } catch (error) {
        console.log("error while register : " , error)
        Swal.fire({
            position: "center",
            icon: "error",
            title: "something went wrong",
            showConfirmButton: false,
            timer: 1500
          });
    }
  }

  const handleCancle = () => {
    navigate("/");
  }

  return (
    <div className="">
      <Navbar />
      <div
        className="card shadow p-4"
        style={{
          width: "700px",
          height: "auto",
          marginLeft: "400px",
          marginTop: "50px",
          marginBottom:"-130px"
        }}
      >
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter user name"
              name="username"
              values={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary"  onClick={handleSubmit} >
            Submit
          </button>
          <button type="submit" className="btn btn-danger" onClick={handleCancle}>
            Cancle
          </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
