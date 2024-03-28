import React, { useState, useEffect } from 'react';
import axios from "../Api";

const BloodStock = () => {
    const [stockData, setStockData] = useState(null);
    const bloodBanks = [
        { name: 'Gaborone National Blood Transfusion Centre', location: 'Gaborone' },
        { name: 'Blood Donation Centre Francistown', location: 'Francistown' },
        { name: 'Scottish Livingstone Hospital', location: 'Molepolole' },
        { name: 'Mahalapye District Hospital', location: 'Mahalapye' },
        { name: 'Sekgoma Memorial Hospital', location: 'Serowe' },
        { name: 'Letsholathebe Memorial Hospital', location: 'Maun' }
    ];

    useEffect(() => {
        fetchStockData();
    }, []);

    const fetchStockData = async () => {
        try {
            const response = await axios.get("/bloodbank/stock");
            setStockData(response.data);
        } catch (error) {
            console.error('Error fetching blood stock:', error);
        }
    };

    return (
        <div>
            <h2>Blood Stock</h2>
            {stockData ? (
                <div>
                    {bloodBanks.map(bloodBank => (
                        <div key={bloodBank.name}>
                            <h3>{bloodBank.name}</h3>
                            <p>Location: {bloodBank.location}</p>
                            <p>Available Blood:</p>
                            <ul>
                                {Object.entries(stockData[bloodBank.location]).map(([bloodGroup, quantity]) => (
                                    <li key={bloodGroup}>{bloodGroup}: {quantity} mL</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading blood stock...</p>
            )}
        </div>
    );
};

export default BloodStock;
