import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../components/UserContext";

export default function () {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {setUser}=useContext(UserContext);

  const handleLogin = async (e) =>{
     e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8082/users/login`,{
        email,
        password
      })
      console.log(response.data)
      setUser(response.data)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    } catch (error) {
      console.log("login error : ",error)
      Swal.fire({
        position: "center",
        icon: "error",
        title: "invalid credential",
        showConfirmButton: false,
        timer: 1500
      });
    }
  
  }

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
                value={email}
                onChange={(e) => setEmail(e.target.value )}
              />
            </div>
           
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>
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
