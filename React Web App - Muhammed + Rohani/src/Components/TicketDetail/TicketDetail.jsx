import React, { useState, useEffect } from 'react';
import './TicketDetail.css'
import mockData from './mockData'; // Import mock data

const TicketDetail = () => {
    const [ticketData, setTicketData] = useState(null);

    // Function to fetch ticket data
    const fetchTicketData = async () => {
        // Simulate fetching data
        setTicketData(mockData);
    };

    useEffect(() => {
        fetchTicketData();
    }, []);

    const handleOfficerChange = () => {
        // Future implementation for changing officer
    };

    const handleStatusUpdate = () => {
        // Future implementation for updating status
    };

    if (!ticketData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ticket-detail">
            <div className="ticket-header">
                <div className="ticket-id-section">
                    <span>Ticket ID: </span>
                    <a href="#">{ticketData.ticketId}</a>
                </div>
                <span className={`status ${ticketData.status.replace(/ /g, '-').toLowerCase()}`}>
                    {ticketData.status}
                </span>
            </div>
            <div className="client-info">
                <h2>Client Information</h2>
                <p><strong>Name:</strong> {ticketData.client.name}</p>
                <p><strong>Contact:</strong> {ticketData.client.contact}</p>
            </div>
            <div className="ticket-info">
                <h2>Ticket Information</h2>
                <div className="info-tags">
                    <p><strong>Inquiry Tag:</strong> {ticketData.inquiryTag}</p>
                    <p><strong>Priority:</strong> <span className={`priority ${ticketData.priority.toLowerCase()}`}>
                        {ticketData.priority}
                    </span></p>
                </div>
                <textarea
                    value={ticketData.description}
                    placeholder="Description"
                />
                <div className="assigned-officer">
                    <h2>Assigned Officer: <span id="officer-name">{ticketData.assignedOfficer}</span> <button onClick={handleOfficerChange}>Change</button></h2>
                </div>
            </div>
            <div className="latest-update-status">
                <div className="latest-update">
                    <p><strong>Latest Update:</strong> {ticketData.latestUpdate}</p>
                </div>
                <div className="update-status">
                    <button onClick={handleStatusUpdate}>Update Status</button>
                </div>
            </div>
        </div>
    );
};

export default TicketDetail;
