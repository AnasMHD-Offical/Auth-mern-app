import React from "react"
import { Navigate, Route , Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"}/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
