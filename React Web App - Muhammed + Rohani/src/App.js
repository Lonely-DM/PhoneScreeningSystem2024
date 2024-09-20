import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/home";
import Login from "./Components/LoginSignin/LoginSignin";
import Signup from "./Components/Signup/Signup";
import SetupMfa from "./Components/SetupMfa/SetupMfa";
import Navbar from "./Components/LandingPage/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import TicketDetail from "./Components/TicketDetail/TicketDetail";
import Calendar from "./Components/Calendar/Calendar";
import Profile from "./Components/Profile/ProfileCard";
import Settings from "./Components/settings/ProfileSettings";
import AIInsights from "./Components/AI-insights/AIInsights";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route exact path="/Signup" Component={Signup} />
          <Route exact path="/setup-mfa" Component={SetupMfa} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/TicketDetail" Component={TicketDetail} />
          <Route path="/Calendar" Component={Calendar} />
          <Route path="/profile" Component={Profile} /> 
          <Route path="/settings" Component={Settings} /> 
          <Route path="/AIInsights" Component={AIInsights} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
