import React, { useState } from "react";
import "./App.css";
import carIcon from "./icons8-cars-100.png";

const cities = [
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Pune",
    "Kolkata",
    "Goa"
];

function RentalBooking() {
    const [city, setCity] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const [vehicleType, setVehicleType] = useState("Car");
    const [age, setAge] = useState("");
    const [filetype, setFiletype] = useState("");

    // Handle city input
    const handleCityChange = (e) => {
        const value = e.target.value;
        setCity(value);

        if (value.trim().length > 0) {
            const filtered = cities.filter((c) =>
                c.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCities(filtered);
            setShowDropdown(true);
        } else {
            setFilteredCities([]);
            setShowDropdown(false);
        }
    };

    // Select city from dropdown
    const selectCity = (value) => {
        setCity(value);
        setShowDropdown(false);
    };

    // Handle submit
    const handleSubmit = () => {
        if (!city || !pickupDate || !returnDate || !age) {
            alert("Please fill all fields");
            return;
        }

        if (Number(age) < 18) {
            alert("Driver must be at least 18 years old");
            return;
        }

        if (returnDate < pickupDate) {
            alert("Return date cannot be before pickup date");
            return;
        }

        if(!cities.includes(city)) {
            alert("We will start the servies in your city soon.");
            return;
        }

        // Show data (for testing)
        console.log({
            city,
            pickupDate,
            returnDate,
            vehicleType,
            age,
            filetype
        });

        alert(
            `Booking Details:\nCity: ${city}\nPickup: ${pickupDate}\nReturn: ${returnDate}\nVehicle: ${vehicleType}\nAge: ${age}`
        );
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="heading">
                    <img src={carIcon} alt="Car" width={45} height={45} /> Rental
                </h2>

                {/* City Input */}
                <div className="city-wrapper">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter Pickup City"
                        value={city}
                        onChange={handleCityChange}
                        onFocus={() => setShowDropdown(true)}
                    />

                    {showDropdown && (
                        <div className="dropdown">
                            {filteredCities.length > 0 ? (
                                filteredCities.map((c, i) => (
                                    <div
                                        key={i}
                                        className="dropdown-item"
                                        onClick={() => selectCity(c)}
                                    >
                                        {c}
                                    </div>
                                ))
                            ) : (
                                <div className="dropdown-item">
                                    No cities found
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Popular */}
                <div className="popular">
                    <p>Popular Hubs:</p>
                    {cities.slice(0, 6).map((c, i) => (
                        <span key={i} onClick={() => selectCity(c)}>
                            {c}
                        </span>
                    ))}
                </div>

                {/* Dates */}
                <div className="row">
                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "12px", color: "#666" }}>
                            Pickup Date
                        </label>
                        <input
                            className="input"
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "12px", color: "#666" }}>
                            Return Date
                        </label>
                        <input
                            className="input"
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </div>
                </div>

                {/* Vehicle + Age */}
                <div className="row">
                    <select
                        className="inp"
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                    >
                        <option value="Car">Car Rental</option>
                        <option value="Bike">Bike Rental</option>
                    </select>

                    <input
                        className="inp"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Driver's Age"
                    />
                   
                </div>
                <div className="inp">
                     <input
                        className="license-input"
                        type="file"
                        value={filetype}
                        onChange={(e) => setFiletype(e.target.value)}
                        placeholder="Driver's license"
                    />
                </div>

                {/* Warning */}
                <p className="warning">
                    ⚠️ Valid driving license required at pickup
                </p>

                {/* Submit */}
                <button className="submitBtn" onClick={handleSubmit}>
                    Search {vehicleType}s
                </button>
            </div>
        </div>
    );
}

export default RentalBooking;