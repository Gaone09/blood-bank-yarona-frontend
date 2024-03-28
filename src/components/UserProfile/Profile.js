import React from 'react';
import UserNav from './UserNav';
import { useParams } from "react-router-dom";
import EditProfile from './EditProfile';
import DonationHistory from './DonationHistory';
import RequestHistory from './RequestHistory';

const Profile = () => {
    const { handle } = useParams();
    
    // Navigation links for the user profile page
    const navLinks = [
        { to: "/user/profile", icon: "fa-user", title: "My Profile" },
        { to: "/user/donate", icon: "fa-hand-holding-medical", title: "Donate Blood" },
        { to: "/user/donations", icon: "fa-clock-rotate-left", title: "Donation History" },
        { to: "/user/request", icon: "fa-rotate", title: "Blood Request" },
        { to: "/user/requests", icon: "fa-clock-rotate-left", title: "Request History" }
    ];

    // Determine which component to render based on the URL parameter
    const renderComponent = () => {
        switch (handle) {
            case "profile":
                return <EditProfile />;
            case "donate":
            case "request":
                return <UserForm />;
            case "donations":
                return <DonationHistory user="user" handle={handle} />;
            case "requests":
                return <RequestHistory user="user" handle={handle} />;
            default:
                return null; // Render nothing if no matching route
        }
    };

    return (
        <div className='flex w-full h-96'>
            <UserNav data={navLinks} />
            <div className='ml-96 w-full flex justify-center pr-24'>
                {renderComponent()} {/* Render the appropriate component */}
            </div>
        </div>
    );
}

export default Profile;
