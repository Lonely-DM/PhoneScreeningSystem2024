import React from 'react'
import './SignUp.css'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import srvicon from '../Assets/srvicon.png';
import srvlogo from '../Assets/srvlogo.jpeg';


{/* Original HTML document created by ZHUNGA converted to JSX by Oscar */}
const SignUp = () => {
  return (
    <html>
    <head>
    <title> Sign Up Page</title>
    <link rel="stylesheet" href="./SignUp.css"/>
    </head>
    <link rel="shortcut icon" type="x-icon" href={srvicon}/>
        <sign-up-body>
            <div class="sign-up-form">
                <img src={srvlogo} class="sign-up-img"/>
                <h1> Sign Up</h1>
                <h2> Create Your Account </h2>
                <form>
                    <input type="first name" class="sign-up-input-box" placeholder="Enter Your First Name"/>
                    <input type="last name" class="sign-up-input-box" placeholder="Enter Your Last Name"/>
                    <input type="phone number" class="sign-up-input-box" placeholder="Enter Your Phone Number"/>
                    <input type="work email address" class="sign-up-input-box" placeholder="Enter Your Work Email Address"/>
                    <input type="job posiiton" class="sign-up-input-box" placeholder="Enter Your Job Position"/>
                    <input type="employee ID" class="sign-up-input-box" placeholder="Enter Your Employee ID"/>
                    <input type="password" class="sign-up-input-box" placeholder="Create a Password"/>
                    <input type="password" class="sign-up-input-box" placeholder="Confirm Your Password"/>
                    <p> <span><input type = "checkbox"/></span> By Signing Up, You are Agreeing to Senior Rights Victoria's Terms of Use and Privacy Policies </p>
                        <button type = "button" class = "sign-btn">Sign Up</button>
                    <p> Already Have an Account? <a href="/login">Login</a></p>
                </form>
            </div>
        </sign-up-body>
    </html>

  )
}

export default SignUp