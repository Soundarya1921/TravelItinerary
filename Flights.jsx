import React, { useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
import flight1 from "./img/icons8-flight-100.png";
import flight2 from "./img/icons8-flight-94.png";
import ticket1 from "./img/icons8-ticket-100.png";
import ticket2 from "./img/icons8-ticket-100-2.png"

function Flights() {

    const [selected, setSelected] = useState("");
    const navigate = useNavigate()

    const flightscard = [
        {
            image: flight1,
            title: "International flights",
        },
        {
            image: flight2,
            title: "Domestic flights",
        },
        {
            image: ticket1,
            title: "Booking flights",
        },
        {
            image: ticket2,
            title: "Check booking",
        }
    ];

    const handleCardClick = (title) => {
        setSelected(title);

        if (title === "International flights") {
            navigate("/international")
           
        } 
        else if (title === "Domestic flights") {
            navigate("/domestic")
            
        } 
        else if (title === "Booking flights") {
           
        } 
        else if (title === "Check booking") {
            
        }
    };

    const handleTrending = () => {
        navigate("/trending");
    };

    return (
        <div>
            <div className="flightwrapper"></div>

            <div className="topclassflights">
                <p className="topclassflights">Welcome to Our Flight Booking Service</p>

                <div className="flightboxwrapper">
                    {
                        flightscard.map((ele, index) => {
                            return (
                                <div 
                                    className="cardss" 
                                    key={index}
                                    onClick={() => handleCardClick(ele.title)}
                                    style={{
                                        border: selected === ele.title ? "2px solid #333" : "none"
                                    }}
                                >
                                    <img 
                                        src={ele.image} 
                                        alt="cardimage" 
                                        width={40} 
                                        height={40} 
                                    />
                                    <p className='cardstitle'>{ele.title}</p>
                                    <p className='cardstitle'>{ele.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <button 
                className="helpbutton"
                onClick={handleTrending}
            >
                Trending places
            </button>

        </div>
    )
}

export default Flights;