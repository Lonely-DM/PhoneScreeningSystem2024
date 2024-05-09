import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='' className='logo'></img>
      <h1>Phone Screening Portal</h1>
      <ul>
        <li> <Link to="/login">
         <button className='purple' type='submit'>Log In</button>
         </Link></li>
        <li> <Link to="/Signup">
          <button className='orange' type='submit'> Sign Up</button>
          </Link></li>
      </ul>
         
</div>
    
  );
}

export default Navbar;
