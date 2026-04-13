import React, { useState } from "react";
import "./App.css";
import flightIcon from "./img/icons8-flight-100.png";

const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad"
];

function Domesticflights() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const [departDate, setDepartDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const [travelClass, setTravelClass] = useState("Economy");
    const [age, setAge] = useState("");

  
    const handleFromChange = (e) => {
        const value = e.target.value;
        setFrom(value);

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

    
    const selectCities = (value) => {
        setFrom(value);
        setShowDropdown(false);
    };

   
    const handleSubmit = () => {
        if (!from || !to || !departDate || !returnDate || !age) {
            alert("Please fill all fields");
            return;
        }

        if (Number(age) < 11) {
            alert("Passenger must be at least 11 years old to Travel internationally");
            return;
        }

     

        console.log({
            from,
            to,
            departDate,
            returnDate,
            travelClass,
            age
        });

    }
    return (
        <div className="container">
            <div className="card">
                <h2 className="heading">
                    <img src={flightIcon} alt="Flight" width={45} height={45} /> Domestic Flights
                </h2>

             
                <div className="city-wrapper">
                    <input
                        className="input"
                        type="text"
                        placeholder="From City"
                        value={from}
                        onChange={handleFromChange}
                        onFocus={() => setShowDropdown(true)}
                    />

                    {showDropdown && (
                        <div className="dropdown">
                            {filteredCities.length > 0 ? (
                                filteredCities.map((c, i) => (
                                    <div
                                        key={i}
                                        className="dropdown-item"
                                        onClick={() => selectCities(c)}
                                    >
                                        {c}
                                    </div>
                                ))
                            ) : (
                                <div className="dropdown-item">No results</div>
                            )}
                        </div>
                    )}
                </div>

                {/* To */}
                <input
                    className="input"
                    type="text"
                    placeholder="To City"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />

                {/* Dates */}
                <div className="row">
                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "12px", color: "#666" }}>
                            Departure Date
                        </label>
                        <input
                            className="input"
                            type="date"
                            value={departDate}
                            onChange={(e) => setDepartDate(e.target.value)}
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

                
                <div className="row">
                    <select
                        className="inp"
                        value={travelClass}
                        onChange={(e) => setTravelClass(e.target.value)}
                    >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                    </select>

                    <input
                        className="inp"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Passenger Age"
                    />
                </div>

               

                <button className="submitBtn" onClick={handleSubmit}>
                    Search Flights
                </button>
            </div>
        </div>
    );
}

export default Domesticflights;