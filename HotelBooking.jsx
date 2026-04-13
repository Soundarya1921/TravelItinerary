import React, { useState } from "react";
import "./App.css";
import hotelIcon from "./img/icons8-hotel-100.png";

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

function HotelBooking() {
    const [city, setCity] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const [guests, setGuests] = useState(1);
    const [rooms, setRooms] = useState("");

    // City input
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

    const selectCity = (value) => {
        setCity(value);
        setShowDropdown(false);
    };

    // Submit
    const handleSubmit = () => {
       
        if (!city || !checkIn || !checkOut || !guests || !rooms) {
            alert("Please fill all fields");
            return;
        }

       

      
        if (checkOut < checkIn) {
            alert("Check-out cannot be before check-in");
            return;
        }

        // Debug output
        console.log({
            city,
            checkIn,
            checkOut,
            guests,
            rooms
        });

        alert(
            `Booking Details:\nCity: ${city}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nRooms: ${rooms}`
        );
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="heading">
                    <img src={hotelIcon} alt="Hotel" width={55} height={55} /> Hotel Booking
                </h2>

                {/* City */}
                <div className="city-wrapper">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter City"
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
                                <div className="dropdown-item">No results</div>
                            )}
                        </div>
                    )}
                </div>

                {/* Popular */}
                <div className="popular">
                    <p>Popular Cities:</p>
                    {cities.slice(0, 6).map((c, i) => (
                        <span key={i} onClick={() => selectCity(c)}>
                            {c}
                        </span>
                    ))}
                </div>

                {/* Dates */}
                <div className="row">
                    <input
                        className="input"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                    />
                    <input
                        className="input"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                    />
                </div>

                {/* Guests + Age */}
                <div className="row">
                    <input
                        className="input"
                        type="number"
                        min="1"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        placeholder="Guests"
                    />

                    <input
                        className="input"
                        type="number"
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        placeholder="select number of rooms"
                    />
                </div>

                

                <button className="submitBtn" onClick={handleSubmit}>
                    Search Hotels
                </button>
            </div>
        </div>
    );
}

export default HotelBooking;