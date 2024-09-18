import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios"
import "./Signup.css";
import { handleError, handleSuccess } from "../Utils/toster";
function Signup() {
const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copysignupInfo = {...signupInfo}
    copysignupInfo[name] = value
    setSignupInfo(copysignupInfo)
  };
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const {name,email,phone,password} = signupInfo
    if(!name || !email || !phone || !password){
        return handleError("All fields required!")
    }
    try {
        const url = "http://localhost:8080/signup"
        const respond = await axios.post(url,signupInfo)
        const data = respond.data
        // console.log(respond.data.message);
       if(data.success){
        handleSuccess(data.message)
        setSignupInfo({
            name: "",
            email: "",
            phone: "",
            password: "",
        })
        setTimeout(()=>{
            navigate("/login")
        },3000)
       }else if(error){

       }
        
    } catch (error) {
        handleError(error)

    }
  }
//   console.log(signupInfo);
  
  return (
    <>
      <div className="Container-signup">
        <h2 className="Heading">Sign Up</h2>
        <form action="" className="Form" onSubmit={handleSubmit}>
          <div className="Form-container">
            <label htmlFor="name" className="Form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your Name"
              className="Form-input"
              onChange={handleChange}
              value={signupInfo.name}
            />
          </div>
          <div className="Form-container">
            <label htmlFor="email" className="Form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              autoFocus
              placeholder="Enter your Email"
              className="Form-input"
              onChange={handleChange}
              value={signupInfo.email}
            />
          </div>
          <div className="Form-container">
            <label htmlFor="phone" className="Form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              autoFocus
              placeholder="Enter your Phone number"
              className="Form-input"
              onChange={handleChange}
              value={signupInfo.phone}
            />
          </div>
          <div className="Form-container">
            <label htmlFor="password" className="Form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              autoFocus
              placeholder="Enter your Password"
              className="Form-input"
              onChange={handleChange}
              value={signupInfo.password}
            />
          </div>
          <button type="submit" className="Form-btn-signup">Sign Up</button>
          <span className="Form-navigation">
            Already have an account?{" "}
            <Link className="Form-link" to={"/login"}>
              Login
            </Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;
