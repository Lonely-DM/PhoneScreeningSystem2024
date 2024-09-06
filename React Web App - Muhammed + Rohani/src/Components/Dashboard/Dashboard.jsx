import React from 'react';
import './Dashboard.css'; // Import your CSS file here
import { openSidebar, closeSidebar } from './Script.js';
import logo from '../Assets/logo.png';
import AreaChart from './AreaChartComp.js'

const Dashboard = () => {
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
        
      </head>
      <div className="grid-container">
        {/* Header */}
        <header className="header">
          <div className="menu-icon" onClick={openSidebar}>
            <span className="material-icons-outlined">menu</span>
          </div>
          <div className="header-left">
            <span className="material-icons-outlined">search</span>
          </div>
          <div className="header-right">
            <span className="material-icons-outlined">notifications</span>
            <span className="material-icons-outlined">email</span>
            <span className="material-icons-outlined">account_circle</span>
          </div>
        </header>
        {/* Sidebar */}
        <aside id="sidebar">
          <div className="sidebar-title">
            <div className="sidebar-brand"></div>
            <span className="material-icons-outlined" onClick={closeSidebar}>close</span>
          </div>
          <div className="logo-container">
          <a href='/'><img src={logo} alt="SRV Logo" className="logo-img2" /></a>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">dashboard</span> Dashboard
            </li>
            <li className="sidebar-list-item">
            <span class="material-symbols-outlined">monitoring</span> Analytics
            </li>
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">description</span> Ticket History
            </li>
            <li className="sidebar-list-item">
            <span class="material-symbols-outlined">calendar_month</span> Calendar
            </li>
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">settings</span> Settings
            </li>

          </ul>
        </aside>
        {/* Main */}
        <main className="main-container">
          <div className="main-title">
            <h1>Dashboard</h1>
          </div>
          {/* Cards */}
          <div className="main-cards">
             <div className="card1">
              <div className="card-inner">
              <h3>Alerts</h3>
             <span className="material-icons-outlined">notifications_active</span>
           </div>
           <h1>8</h1>
            </div>
            <div className="card1">
             <div className="card-inner">
               <h3>User Clients</h3>
             <span className="material-icons-outlined">groups</span>
           </div>
           <h1>13</h1>
          </div>
          <div className="card1">
           <div className="card-inner">
             <h3>Pending Tickets</h3>
             <span className="material-icons-outlined">feedback</span>
            </div>
           <h1>17</h1>
            </div>
            <div className="card1">
            <div className="card-inner">
            <h3>Phone Queue</h3>
             <span className="material-icons-outlined">support_agent</span>
          </div>
           <h1>5</h1>
          </div>
          </div>
          
          {/* Charts */}
          <div className="charts">
            <div className="charts-card">
              <h2 className="charts-title" style={{ fontSize: '18px' }}>Annual Frequancy of Main Types of Abuse Reported</h2>
              <AreaChart />
            </div>
            <div className="charts-card">
              <h2 className="charts-title" style={{ fontSize: '18px' }}>In-Progress Tickets</h2>
              <div className="in-progress-tickets">
                {[
                  { number: 97834672, description: 'Support Requested on Behalf of a Colleague', user: 'Alice_Johnson', prior: 'High' },
                  { number: 67890216, description: 'Assistance Required for Financial Abuse', user: 'John_Smith' , prior: 'Medium'},
                  { number: 89871921, description: 'Inquiry Regarding SRV Services', user: 'Emily_Davis', prior: 'Low' }
                ].map(({ number, description, user, prior}) => (
                  <div key={number} className="ticket-box">
                    <div className="ticket-header1">
                      <h3>SRV_{number}</h3>
                      <p className="description">{description}</p>
                      <div className="user-info">
                      <span className="material-symbols-outlined profile-icon">account_circle</span>
                      <span className="user-name">{user}</span>
                      <div className="prior-level">
                      <span className={`prior ${prior.toLowerCase()}`}>{prior} Priority</span>
                    </div>
                      
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
