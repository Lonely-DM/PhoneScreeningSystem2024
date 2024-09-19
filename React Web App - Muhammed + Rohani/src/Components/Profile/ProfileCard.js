import React from "react";
import "./styles/ProfileCard.css";  // Import CSS from style folder
import logo from '../Assets/logo.png';
import bellIcon from '../Assets/bell.png';  
import placeholder from '../Assets/placeholder.jpg';  

const ProfileCard = () => {
  return (
    <div className="profile-page">
      {/* Header Section with Logo, Notification Bell, and User Image */}
      <header className="profile-header">
        <img src={logo} alt="Seniors Rights Victoria Logo" className="logo" />
        <div className="header-right">
          <img src={bellIcon} alt="Notification Bell" className="bell-icon" />
          <div className="user-section">
            <img src={placeholder} alt="User Avatar" className="header-avatar" />
            <span className="user-name">John Doe</span>
          </div>
        </div>
      </header>

      {/* Main Profile Section */}
      <div className="profile-info">
        <div className="avatar-container">
          <div className="avatar-circle">
            <img src={placeholder} alt="Profile Avatar" className="profile-avatar" />
          </div>
        </div>
        <h1>John Doe</h1>
        <p>Melbourne, Australia</p>
        <p className="job-title">Supervisor</p>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <h2>21</h2>
          <p>Feedbacks</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>6</h2>
          <p>Current Clients</p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="profile-actions">
        <button className="home-button">Home</button>
        <button className="settings-button">Settings</button>
      </div>
    </div>
  );
};

export default ProfileCard;
