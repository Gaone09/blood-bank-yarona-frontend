import React from 'react';

const RequestDetail = ({ request }) => {
    return (
        <div className="request">
            <h3>{request.title}</h3>
            <p>{request.description}</p>
            <p>Requested by: {request.requester}</p>
        </div>
    );
};

export default RequestDetail;
