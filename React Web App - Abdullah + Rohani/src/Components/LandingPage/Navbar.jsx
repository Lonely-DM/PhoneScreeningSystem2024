import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='' className='logo'></img>
      <h1>Phone Screening Portal</h1>
      <ul>
        <a href="/login"><li><button className='purple' type='submit'> Log In</button></li></a>
        <li><button className='orange' type='submit'> Sign Up</button></li>
      </ul>
         
</div>
    
  );
}

export default Navbar;
