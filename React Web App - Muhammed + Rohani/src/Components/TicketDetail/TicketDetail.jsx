import React, { useState, useEffect } from 'react';
import './TicketDetail.css';
import mockData from './mockData';
import UpdateInfoModal from './UpdateInfoModal';
import { handleStatusUpdate, handleOfficerChange } from './ticketActions';

const TicketDetail = () => {
    const [ticketData, setTicketData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('status');

    const fetchTicketData = async () => {
        setTicketData(mockData);
    };

    useEffect(() => {
        fetchTicketData();
    }, []);

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
                    readOnly
                />
                <div className="assigned-officer">
                <h2>Assigned Officer: <span id="officer-name">{ticketData.assignedOfficer}</span><button onClick={() => { setModalMode('officer'); setShowModal(true); }}>Change Officer</button></h2>
                </div>
            </div>
            <div className="latest-update-status">
                <div className="latest-update">
                    <p><strong>Latest Update:</strong> {ticketData.latestUpdate}</p>
                </div>
                <div className="update-status">
                    <button onClick={() => { setModalMode('status'); setShowModal(true); }}>Update Status</button>
                </div>
            </div>
            <UpdateInfoModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                mode={modalMode}
                currentStatus={ticketData.status}
                handleStatusUpdate={handleStatusUpdate}
                handleOfficerChange={handleOfficerChange}
            />
        </div>
    );
};

export default TicketDetail;
