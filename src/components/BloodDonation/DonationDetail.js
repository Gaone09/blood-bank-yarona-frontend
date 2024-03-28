import React from 'react';

const DonationDetails = ({ donation }) => {
    return (
        <div>
            <h3>Donation Details</h3>
            <p>Donor Name: {donation.donorName}</p>
            <p>Blood Type: {donation.bloodType}</p>
            <p>Donation Date: {donation.donationDate}</p>
            <p>Location: {donation.location}</p>
            <p>Anonymous Donation: {donation.isAnonymous ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default DonationDetails;
