import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BloodBankProfile = () => {
    const [donationInfo, setDonationInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch donation information for the blood bank from the server
        fetchDonationInfo();
    }, []);

    const fetchDonationInfo = async () => {
        try {
            // Make a GET request to the server endpoint to fetch donation information for the blood bank
            const response = await axios.get('/api/bloodbank/donationinfo');

            // Update state with the fetched donation information
            setDonationInfo(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching donation information:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Blood Bank Profile</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {donationInfo ? (
                        <div>
                            <p>Blood Bank Name: {donationInfo.bankName}</p>
                            <p>Total Bags Donated: {donationInfo.totalBagsDonated}</p>
                            {/* Display other relevant information */}
                        </div>
                    ) : (
                        <p>No donation information available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default BloodBankProfile;
