import React from 'react';
import ManageUsers from '../Admin/ManageUsers';
import ManageDonations from '../Admin/ManageDonations';
import ManageRequests from '../Admin/ManageRequests';
import BloodBankProfile from '../Admin/BloodBankProfile';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Manage Users</h2>
                <ManageUsers />
            </div>
            <div>
                <h2>Manage Donations</h2>
                <ManageDonations />
            </div>
            <div>
                <h2>Manage Requests</h2>
                <ManageRequests />
            </div>
            <div>
                <h2>Blood Bank Profiles</h2>
                <BloodBankProfile />
            </div>
        </div>
    );
};

export default AdminDashboard;
