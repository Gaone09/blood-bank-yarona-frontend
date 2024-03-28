import React from 'react';
import DonationDetails from './DonationDetails'; // Import the DonationDetails component

const DonationEntry = ({ entry }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'green';
      case 'Rejected':
        return 'red';
      case 'Pending':
        return 'orange';
      default:
        return 'black';
    }
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <span style={{ color: getStatusColor(entry.status) }}>{entry.status}</span>
      <span> - {entry.donorName} donated {entry.bloodType} blood on {entry.date}</span>
      {/* Render the DonationDetails component for each entry */}
      <DonationDetails donation={entry} />
    </div>
  );
};

const DonationList = ({ donations }) => {
  return (
    <div>
      <h2>Donation List</h2>
      {donations.map((donation, index) => (
        <DonationEntry key={index} entry={donation} />
      ))}
    </div>
  );
};

export default DonationList;

