import React, { useState } from 'react';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState(''); // State for selected district
    const [selectedBloodGroup, setSelectedBloodGroup] = useState(''); // State for selected blood group
    const [selectedBloodBank, setSelectedBloodBank] = useState(''); // State for selected blood bank
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form fields
        if (age < 18 || age > 65) {
            setError('Age must be between 18 and 65 years.');
            return;
        }
        if (weight < 50) {
            setError('Weight must be at least 50kg.');
            return;
        }
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Other form fields */}
            <div>
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Weight (kg):</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>District:</label>
                {/* Render Location component for selecting district */}
                <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                    <option value="">Select District</option>
                    {/* Add options for districts */}
                    <option value="Molepolole">Molepolole</option>
                    <option value="Mahalapye">Mahalapye</option>
                    <option value="Serowe">Serowe</option>
                    <option value="Maun">Maun</option>
                    <option value="Gaborone">.Gaborone</option>
                    <option value="Francistown">Francistown</option>
                </select>
            </div>
            <div>
                <label>Blood Group:</label>
                {/* Render blood group options */}
                <select value={selectedBloodGroup} onChange={(e) => setSelectedBloodGroup(e.target.value)}>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
            </div>
            <div>
                <label>Blood Bank:</label>
                {/* Render blood bank options */}
                <select value={selectedBloodBank} onChange={(e) => setSelectedBloodBank(e.target.value)}>
                    <option value="">Select Blood Bank</option>
                    {selectedDistrict === 'Gaborone' && (
                        <>
                            <option value="National Blood Transfusion">National Blood Transfusion</option>
                            
                        </>
                    )}
                    {selectedDistrict === 'Molepolole' && (
                        <>
                            <option value="Scottish Livingstone Hospital">Scottish Livingstone Hospital</option>
                            
                        </>
                    )}
                    {selectedDistrict === 'Mahalapye' && (
                        <>
                            <option value="Mahalapye District Hospital">Mahalapye District Hospital</option>
                            
                        </>
                    )}
                    {selectedDistrict === 'Serowe' && (
                        <>
                            <option value="Sekgoma Memorial Hospital">Sekgoma Memorial Hospital</option>
                            
                        </>
                    )}
                    {selectedDistrict === 'Maun' && (
                        <>
                            <option value="Letsholathebe Memorial Hospital">Letsholathebe Memorial Hospital</option>
                            
                        </>
                        
                    )}
                    {selectedDistrict === 'Francistown' && (
                        <>
                            <option value="Barclay Plaza">Letsholathebe Memorial Hospital</option>
                            
                        </>
                        
                    )}

                </select>
            </div>
            <button type="submit">Sign Up</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default SignUpForm;
