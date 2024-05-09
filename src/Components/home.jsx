import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/LandingPage/Navbar';
import CardCarousel from "../Components/LandingPage/CardCarousel"

import {Link} from "react-router-dom";


const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later
  }

   // Function to handle sign-up button click
    const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  return (
    <div>
       
       <Navbar/>
       <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:'20px'}}>
        <h4>We all have the right to live with dignity and respect</h4>
       </div>
       
       <CardCarousel/>
    </div>
  )
}

export default Home