import React from 'react';
import RequestForm from '../BloodRequest/RequestForm';
import RequestList from '../BloodRequest/RequestList';

const BloodRequestPage = () => {
    return (
        <div>
            <h1>Blood Request</h1>
            <RequestForm />
            <RequestList />
        </div>
    );
};

export default BloodRequestPage;
