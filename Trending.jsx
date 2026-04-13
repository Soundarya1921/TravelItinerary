import React, { useState } from "react";
import "./Trending.css";
import { useNavigate } from "react-router-dom";

import manali from "./img/manali.jpg";
import ooty from "./img/ooty.jpg";
import kashmir from "./img/kashmir.jpg";    
import dubai from "./img/dubai.jpg";
import paris from "./img/paris.jpg";
import bali from "./img/bali.jpg";
import maldives from "./img/maldives.jpg";

function Trending() {

    const [selected, setSelected] = useState("");
    const navigate = useNavigate();

    const places = [
        { image: manali, title: "Manali" },
        { image: ooty, title: "Ooty" },
        { image: kashmir, title: "Kashmir" },
        { image: dubai, title: "Dubai" },
        { image: paris, title: "Paris" },
        { image: bali, title: "Bali" },
        { image: maldives, title: "Maldives" }
    ];

    return (
        <div>

            <div className="flightwrapper"></div>

            <div className="topclassflights">
                <p className="Title">Trending Places 🌍</p>

                <div className="flightboxwrapper">
                    {
                        places.map((ele, index) => (
                            <div
                                key={index}
                                className="cards"
                                onClick={() => setSelected(ele.title)}
                                style={{
                                    border: selected === ele.title ? "2px solid gold" : "none"
                                }}
                            >
                                <img 
                                    src={ele.image} 
                                    alt={ele.title}
                                    className="cardimage"
                                />
                                <p className="cardstitle">{ele.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="lowertitle">
                <p>Discover the most sought-after destinations!</p>
                <p>More Trending Places coming soon!</p>
            </div>

        </div>
    );
}

export default Trending;