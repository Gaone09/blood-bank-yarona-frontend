import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
    const [donorName, setDonorName] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [donationDate, setDonationDate] = useState('');
    const [location, setLocation] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        try {
            const response = await axios.post('/api/donations', {
                donorName,
                bloodType,
                donationDate,
                location,
                isAnonymous
            });
            console.log('Donation submitted successfully:', response.data);
            // Optionally, reset the form fields after successful submission
            setDonorName('');
            setBloodType('');
            setDonationDate('');
            setLocation('');
            setIsAnonymous(false);
        } catch (error) {
            console.error('Error submitting donation:', error);
            setError('Error submitting donation. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <h2>Donation Form</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>Donor Name:</label>
                <input type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)} />
                {/* Other form fields */}
                <button type="submit" disabled={submitting}>Submit</button>
            </form>
        </div>
    );
};

export default DonationForm;
