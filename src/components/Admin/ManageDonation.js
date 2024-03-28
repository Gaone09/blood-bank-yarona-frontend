import React, { useState, useEffect } from 'react';
import DonationList from '../BloodDonation/DonationList'; // Import DonationList component
import DonationDetails from '../BloodDonation/DonationDetails'; // Import DonationDetails component
import { getAllDonations } from '../api/donationApi'; // Import function to fetch donations from the server

const ManageDonations = () => {
    const [donations, setDonations] = useState([]);
    const [selectedDonation, setSelectedDonation] = useState(null);

    useEffect(() => {
        // Fetch all blood donations when the component mounts
        fetchDonations();
    }, []);

    // Function to fetch all blood donations
    const fetchDonations = async () => {
        try {
            const donationsData = await getAllDonations();
            setDonations(donationsData); // Update state with fetched donations
        } catch (error) {
            console.error('Error fetching donations:', error);
        }
    };

    // Function to handle selection of a blood donation
    const handleDonationSelect = (donation) => {
        setSelectedDonation(donation);
    };

    return (
        <div>
            <h2>Manage Blood Donations</h2>
            <div style={{ display: 'flex' }}>
                {/* Display list of blood donations */}
                <div style={{ flex: 1 }}>
                    <DonationList donations={donations} onSelect={handleDonationSelect} />
                </div>
                {/* Display details of selected blood donation */}
                <div style={{ flex: 1 }}>
                    {selectedDonation ? <DonationDetails donation={selectedDonation} /> : <p>Select a blood donation to view details</p>}
                </div>
            </div>
        </div>
    );
};

export default ManageDonations;
