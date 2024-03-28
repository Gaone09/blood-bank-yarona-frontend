import React, { useState, useEffect } from 'react';
import RequestDetail from './RequestDetail';
import { getRequests } from '../api/requestApi'; // Import function to fetch requests from the server

const RequestList = () => {
    const [requests, setRequests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [requestsPerPage] = useState(5); // Number of requests to display per page

    useEffect(() => {
        // Fetch requests from the server when the component mounts
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            // Fetch requests from the server
            const data = await getRequests();
            setRequests(data); // Update state with fetched requests
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    // Pagination logic
    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h2>Request List</h2>
            {currentRequests.map((request) => (
                <RequestDetail key={request.id} request={request} />
            ))}
            {/* Pagination */}
            <ul className="pagination">
                {Array.from({ length: Math.ceil(requests.length / requestsPerPage) }, (_, index) => (
                    <li key={index} className="page-item">
                        <button onClick={() => paginate(index + 1)} className="page-link">{index + 1}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RequestList;
