import React from 'react'
import './Signup.css'
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';



const Signup = () => {
  return (
    <div className="sign-up-form">
      
      <form action="">
     
      <a href='/'><img src={logo} alt="SRV Logo"/></a>
      {/* Sign Up Heading */}
      <h1>Create Your Account</h1>
      
      
      {/* Inputs and Details Users Must Input Within the Page */}
     
        <input type="text" className="input-box" placeholder="Enter Your First Name" />
        <input type="text" className="input-box" placeholder="Enter Your Last Name" />
        <input type="tel" className="input-box" placeholder="Enter Your Phone Number" />
        <input type="email" className="input-box" placeholder="Enter Your Work Email Address" />
        <input type="text" className="input-box" placeholder="Enter Your Job Position" />
        <input type="text" className="input-box" placeholder="Enter Your Employee ID" />
        <input type="password" className="input-box" placeholder="Create a Password" />
        <input type="password" className="input-box" placeholder="Confirm Your Password" />
        {/* Acknowledgement of T&C's As well as Privacy Policies */}
        <p className="checkbox-text">
         <input type="checkbox" /> By Signing Up, You are Agreeing to Senior Rights Victoria's Terms of Use and Privacy Policies
        </p>
        {/* Usable Sign-Up Button */}
        <Link to="/dashboard">
           <button type="button" className="sign-btn">Sign Up</button>
        </Link>
        {/* Prompt if User Already Has an Account */}
        <p className="login-link">Already Have an Account? <Link to="/login" className="login">Login</Link></p>
      </form>
    </div>
  )
}

export default Signup
