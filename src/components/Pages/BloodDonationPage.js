import React from 'react';
import DonationForm from '../BloodDonation/DonationForm';
import DonationList from '../BloodDonation/DonationList';

const BloodDonationPage = () => {
    return (
        <div>
            <h1>Blood Donation</h1>
            <DonationForm />
            <DonationList />
        </div>
    );
};

export default BloodDonationPage;
