import React, { useState } from 'react';

const RequestForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [urgency, setUrgency] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} required />
            </div>
            <div>
                <label>Urgency:</label>
                <select value={urgency} onChange={(e) => setUrgency(e.target.value)} required>
                    <option value="">Select Urgency</option>
                    <option value="urgent">Urgent</option>
                    <option value="non-urgent">Non-Urgent</option>
                </select>
            </div>
            <div>
                <label>Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div>
                <label>Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RequestForm;
