import React from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from '../Components/SignUp/SignUp';
//import CardCarousel from "../Components/LandingPage/CardCarousel"

const Signup = (props) => {
  const { } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later
  }

  return (
    <div>
       <Signup />
    </div>
  )
}

export default Signup