import React, { useState, useEffect } from 'react';
import DonationList from './DonationList'; // Import the DonationList component
import { getDonations } from '../api/donationApi'; // Import function to fetch donations from the server

const ParentComponent = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        // Fetch donations from the server when the component mounts
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        try {
            // Fetch donations from the server
            const data = await getDonations();
            setDonations(data); // Update state with fetched donations
        } catch (error) {
            console.error('Error fetching donations:', error);
        }
    };

    return (
        <div>
            {/* Render the DonationList component and pass the donations array as a prop */}
            <DonationList donations={donations} />
        </div>
    );
};

export default ParentComponent;
