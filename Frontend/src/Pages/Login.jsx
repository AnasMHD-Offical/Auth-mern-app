import React from 'react'
import {Link} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "./Login.css"
function Login() {
  return (
    <>
    <div className='Container'>
        <h2 className='Heading'>Login</h2>
        <form action="" className='Form'>
            <div className='Form-container'>
                <label htmlFor="email" className='Form-label'>Email</label>
                <input type="email" name='email' autoFocus required placeholder='Enter your Email'  className='Form-input'/>
            </div>
            <div className='Form-container'>
                <label htmlFor="password" className='Form-label'>Password</label>
                <input type="password" name='password' autoFocus required placeholder='Enter your Password'  className='Form-input'/>
            </div>
            <button className='Form-btn'>Login</button>
            <span className='Form-navigation'>Create an account? <Link className='Form-link' to={"/signup"}>Sign-up</Link></span>
        </form>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Login
