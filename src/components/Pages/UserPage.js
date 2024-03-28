import React from 'react';
import Profile from '../UserProfile/Profile';
import EditProfile from '../UserProfile/EditProfile';
import DonationHistory from '../UserProfile/DonationHistory';
import RequestHistory from '../UserProfile/RequestHistory';

const UserPage = () => {
    return (
        <div>
            <h1>User Page</h1>
            <div>
                <h2>Profile</h2>
                <Profile />
            </div>
            <div>
                <h2>Edit Profile</h2>
                <EditProfile />
            </div>
            <div>
                <h2>Donation History</h2>
                <DonationHistory />
            </div>
            <div>
                <h2>Request History</h2>
                <RequestHistory />
            </div>
        </div>
    );
};

export default UserPage;
