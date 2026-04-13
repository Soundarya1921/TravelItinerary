import React, { useState } from "react";
import "./App.css";

function ContactHelp() {

    const [selected, setSelected] = useState("");
    
    
    const emails = [
        "vickyh18a@gmail.com",
        "soundaryasapare1906@gmail.com",
        "annapurnah797@gmail.com",
        "Teamtarvelwell@gmail.com"   
    ];

    const handleMailClick = (email) => {
        const subject = "Travel Well Support";
        const body = "Hi Fell free to talk to us !! ,";

        
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    };

    const helpCards = [
        { title: "How to book flights?" },
        { title: "Cancel booking" },
        { title: "Payment issues" },
        { title: "Car rental help" }
    ];

    return (
        <div>

            
            <div className="flightwrapper"></div>

            
            <div className="topclassflights">
                <p className="Title">
                    Contact & Help - Travel Well
                </p>

                
                <div className="flightboxwrapper">
                    {
                        emails.map((email, index) => (
                            <div
                                key={index}
                                className="cardss"
                                onClick={() => {
                                    setSelected(email);
                                    handleMailClick(email);
                                }}
                                style={{
                                    border: selected === email ? "2px solid #333" : "none"
                                }}
                            >
                                <p className="cardstitle"> Contact</p>
                                <p className="cardstitle">{email}</p>
                            </div>
                        ))
                    }
                </div>

                
                <p className="topclassflights">Help & FAQs</p>

                <div className="flightboxwrapper">
                    {
                        helpCards.map((ele, index) => (
                            <div
                                key={index}
                                className="cardss"
                                onClick={() => setSelected(ele.title)}
                                style={{
                                    border: selected === ele.title ? "2px solid #333" : "none"
                                }}
                            >
                                <p className="cardstitle">{ele.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

           
            <button 
            className="helpbutton">
                Need More Help?
            </button>

        </div>
    );
}

export default ContactHelp;