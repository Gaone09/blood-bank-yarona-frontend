import React from 'react';

const Location = ({ filterItemData }) => {
    const botswanaDistricts = [
        'South East District',
        'North East District',
        'Kgalagadi District',
        'North West District',
        'Central District',
        'Southern District',
        'Kweneng District'
    ];

    return (
        <div>
            <label>District:</label>
            <select onChange={(e) => filterItemData(e.target.value)}>
                <option>Select District</option>
                {botswanaDistricts.map((district, index) => (
                    <option key={index} value={district}>
                        {district}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Location;
