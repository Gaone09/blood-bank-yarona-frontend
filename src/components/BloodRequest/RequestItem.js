import React from 'react';

const RequestItem = ({ request }) => {
    return (
        <li>
            <h3>{request.patientName}</h3>
            <p>Blood Group: {request.bloodGroup}</p>
            <p>Location: {request.location}</p>
            <p>Contact: {request.contactNumber}</p>
            <p>Details: {request.details}</p>
        </li>
    );
};

export default RequestItem;
