import React, { useState } from 'react';
import './UpdateInfoModal.css';

const UpdateInfoModal = ({ isOpen, onClose, mode, currentStatus, handleStatusUpdate, handleOfficerChange }) => {
    const [status, setStatus] = useState(currentStatus);
    const [date, setDate] = useState('');
    const [officer, setOfficer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === 'status') {
            handleStatusUpdate(status, date);
        } else if (mode === 'officer') {
            handleOfficerChange(officer);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-backdrop" onClick={onClose} />
            <div className="modal">
                <form className="update-info-form" onSubmit={handleSubmit}>
                    {mode === 'status' && (
                        <>
                            <h3>Update Status</h3>
                            <div className="form-group">
                                <label htmlFor="status">Status</label>
                                <select
                                    id="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="Resolved">Resolved</option>
                                    <option value="In-Progress">In-Progress</option>
                                    <option value="Received">Received</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    {mode === 'officer' && (
                        <>
                            <h3>Change Officer</h3>
                            <div className="form-group">
                                <label htmlFor="officer">Officer Name</label>
                                <input
                                    type="text"
                                    id="officer"
                                    value={officer}
                                    onChange={(e) => setOfficer(e.target.value)}
                                    placeholder="Enter officer name..."
                                />
                            </div>
                        </>
                    )}
                    <div className="form-actions">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateInfoModal;
