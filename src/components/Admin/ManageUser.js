import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../api/userApi'; // Import function to fetch all users from the server

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        // Fetch all users when the component mounts
        fetchUsers();
    }, []);

    // Function to fetch all users
    const fetchUsers = async () => {
        try {
            const userData = await getAllUsers();
            setUsers(userData); // Update state with fetched users
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Function to handle selection of a user
    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            <h2>Manage Users</h2>
            <div>
                {/* Display list of users */}
                <ul>
                    {users.map((user, index) => (
                        <li key={index} onClick={() => handleUserSelect(user)}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
                {/* Display details of selected user */}
                {selectedUser && (
                    <div>
                        <h3>User Details</h3>
                        <p>Name: {selectedUser.name}</p>
                        <p>Email: {selectedUser.email}</p>
                        {/* Additional user details can be displayed here */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageUser;
