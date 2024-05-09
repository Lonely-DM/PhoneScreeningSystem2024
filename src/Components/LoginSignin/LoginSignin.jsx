import React from 'react'
import './LoginSignin.css'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';



const LoginSignin = () => {
  return (
    <div className='container'>
        <form action="">
            <h1>Log In</h1>
            <div className='register-link'>
                <p>Don't have an account? <Link to='/Signup'>Create an account</Link></p>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Work Email Address' required />
                <MdEmail className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href='#'>Forgot password?</a>
            </div>

            <Link to="/dashboard">
          <button type="submit">Log In</button>
           </Link>
            <a href="/"><img src={logo} className="Logo"></img></a>
           
          
        </form>
        
            
    </div>
  )
}

export default LoginSignin
