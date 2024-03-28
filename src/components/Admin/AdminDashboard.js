import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                <li><Link to="/admin/manage-users">Manage Users</Link></li>
                <li><Link to="/admin/manage-donations">Manage Donations</Link></li>
                <li><Link to="/admin/manage-requests">Manage Requests</Link></li>
            </ul>
        </div>
    );
};

export default AdminDashboard;
