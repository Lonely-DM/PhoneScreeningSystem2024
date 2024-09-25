import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'; 
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5'; 
import './TicketHistory.css'; 
import logo from '../Assets/logo.png';

const TicketHistory = () => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [requiresActionCount, setRequiresActionCount] = useState(0);

  useEffect(() => {
    
    $(document).ready(function () {
      $('#example').DataTable();
    });

    
    calculateStatus();
  }, []);

  const calculateStatus = () => {
    let inProgress = 0;
    let requiresAction = 0;

  
    const rows = document.querySelectorAll('#example tbody tr');
    rows.forEach((row) => {
      const status = row.cells[5].textContent.trim(); 

      if (status === 'In-Progress') {
        inProgress += 1;
      } else if (status === 'Requires Further Action') {
        requiresAction += 1;
      }
    });

    
    setInProgressCount(inProgress);
    setRequiresActionCount(requiresAction);
  };

  return (
    <div className="ticket-history-page">
      <div className="grid-container">
        {/* Font and Icon Linking */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />

        {/* Header */}
        <header className="header">
          <div className="menu-icon" onClick={() => console.log('Open Sidebar')}>
            <span className="material-icons-outlined">menu</span>
          </div>
          <div className="header-right">
            <span className="material-icons-outlined">notifications</span>
            <span className="material-icons-outlined">email</span>
            <span className="material-icons-outlined">account_circle</span>
          </div>
        </header>

        {/* Sidebar */}
          
              <aside id="sidebar" className="ticket-history-page">
        <div className="sidebar-title">
          <div className="logo-container">
            <img src={logo} alt="SRV Logo" />
          </div>
          <span className="material-icons-outlined" onClick={() => console.log('Close Sidebar')}>
            close
          </span>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <span className="material-icons-outlined">support_agent</span> 
            View The Organisations Assigned Tickets
          </li>
        </ul>
      </aside>


        {/* Main Content */}
        <main className="main-container">
          <div className="main-title">
            <h1>Your Ticket History</h1>
            <h2>Hi, Your Assigned Tickets Are Below</h2>

            {/* Container for status summary */}
            <div className="ticket-status">
              <p style={{ color: 'green' }}>In-Progress: {inProgressCount}</p>
              <p style={{ color: 'darkorange' }}>Require Further Action: {requiresActionCount}</p>
            </div>
          </div>

          {/* Data Table */}
          <table id="example" className="table table-striped">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Client Username</th>
                <th>Inquiry Tag</th>
                <th>Selected Priority</th>
                <th>Date Created</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SRV_97834281</td>
                <td>kaylasmith1938</td>
                <td>General Enquiry</td>
                <td>Low</td>
                <td>29/7/2024 - 12:04PM</td>
                <td style={{ color: 'green' }}>In-Progress</td>
              </tr>
              <tr>
                <td>SRV_97834672</td>
                <td>johnthomson47</td>
                <td>Help For Someone Else</td>
                <td style={{ color: 'red' }}>High</td>
                <td>28/7/2024 - 3:58PM</td>
                <td style={{ color: 'green' }}>In-Progress</td>
              </tr>
              <tr>
                <td>SRV_88023025</td>
                <td>bengray</td>
                <td>Elder Abuse</td>
                <td style={{ color: 'red' }}>High</td>
                <td>26/7/2024 - 10:03AM</td>
                <td style={{ color: 'blue' }}>Resolved</td>
              </tr>
              <tr>
                <td>SRV_23028392</td>
                <td>samanthajones</td>
                <td>Legal Advice</td>
                <td>Medium</td>
                <td>27/7/2024 - 9:30AM</td>
                <td style={{ color: 'darkorange' }}>Requires Further Action</td>
              </tr>
              <tr>
                <td>SRV_34893245</td>
                <td>michaeljohnson</td>
                <td>Financial Assistance</td>
                <td>Low</td>
                <td>24/7/2024 - 11:50AM</td>
                <td style={{ color: 'darkorange' }}>Requires Further Action</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Ticket ID</th>
                <th>Client Username</th>
                <th>Inquiry Tag</th>
                <th>Selected Priority</th>
                <th>Date Created</th>
                <th>Status</th>
              </tr>
            </tfoot>
          </table>
        </main>
      </div>
    </div>
  );
};

export default TicketHistory;
