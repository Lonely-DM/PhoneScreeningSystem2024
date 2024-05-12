import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';
import Home from './Components/home'
import Login from './Components/LoginSignin/LoginSignin';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    // <div className='container'>
    //    <Navbar/>
    //    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:'20px',}}>
    //     <h4>We all have the right to live with dignity and respect</h4>
    //    </div>
       
    //    <CardCarousel/>
    // </div>
    <div class="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
