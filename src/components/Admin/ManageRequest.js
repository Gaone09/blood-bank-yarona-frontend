import React, { useState, useEffect } from 'react';
import RequestList from '../BloodRequest/RequestList'; // Import RequestList component
import RequestDetail from '../BloodRequest/RequestDetail'; // Import RequestDetail component
import { getAllRequests } from '../api/requestApi'; // Import function to fetch requests from the server

const ManageRequest = () => {
    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        // Fetch all blood requests when the component mounts
        fetchRequests();
    }, []);

    // Function to fetch all blood requests
    const fetchRequests = async () => {
        try {
            const requestsData = await getAllRequests();
            setRequests(requestsData); // Update state with fetched requests
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    // Function to handle selection of a blood request
    const handleRequestSelect = (request) => {
        setSelectedRequest(request);
    };

    return (
        <div>
            <h2>Manage Blood Requests</h2>
            <div style={{ display: 'flex' }}>
                {/* Display list of blood requests */}
                <div style={{ flex: 1 }}>
                    <RequestList requests={requests} onSelect={handleRequestSelect} />
                </div>
                {/* Display details of selected blood request */}
                <div style={{ flex: 1 }}>
                    {selectedRequest ? <RequestDetail request={selectedRequest} /> : <p>Select a blood request to view details</p>}
                </div>
            </div>
        </div>
    );
};

export default ManageRequest;
