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
              <span className="material-icons-outlined">contact_mail</span> All Tickets
            </li>
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">description</span> Reports
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
              <h2 className="charts-title" style={{ fontSize: '18px' }}>Customer Inquiry Frequency: May 2024</h2>
              <AreaChart />
            </div>
            <div className="charts-card">
              <h2 className="charts-title" style={{ fontSize: '18px' }}>In-Progress Tickets</h2>
              <div className="in-progress-tickets">
             {[1, 2, 3].map((issueNumber) => (
            <div key={issueNumber} className="ticket-box">
             <div className="ticket-header">
                <h3>Ticket {issueNumber}</h3>
                <p className="description">Description: Lorem ipsum dolor sit amet</p>
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




