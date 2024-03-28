import React, { useState } from 'react';
import { signIn } from '../api/authApi';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Checking if the email and password fields are not empty
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        // 2. Checking if the email is in a valid format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // 3. Checking if the password meets certain criteria
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            // 4. Sending the form data to a server for authentication using an API call
            const response = await signIn({ email, password });

            // 5. Handling the response from the server
            // For example, redirecting the user if authentication is successful
            console.log('Authentication successful:', response);
            // Redirect the user to the dashboard or profile page
        } catch (error) {
            // Handling errors from the server
            console.error('Authentication failed:', error);
            setError(error.message || 'An error occurred during authentication.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Email field */}
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            {/* Password field */}
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {/* Error message */}
            {error && <p className="error">{error}</p>}
            {/* Submit button */}
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
