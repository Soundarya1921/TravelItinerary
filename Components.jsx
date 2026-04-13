import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "./img/logo img.png";

function Components() {
 
    return (
        <div className="navbarwrapper">
            <div className="logosection">
                <img src={logo} alt="LOGO" width={100} height={100}></img>
            </div>
             <div className="navmenu">
                
                <NavLink to={"/flight"} className="navlinks">Flights</NavLink>
                <NavLink to={"/hotel-booking"} className="navlinks">Hotela/HomeStay</NavLink>
                <NavLink to={"/rental-cars"} className="navlinks">Rentalcars</NavLink>
                <NavLink to={"/booking"} className="navlinks">Booking</NavLink>
                <NavLink to={"/contact-us"} className="navlinks">Contact Us</NavLink>
            </div>
            <div> 
               <NavLink to={"/login"} className="navlinks">Login/Sign Up</NavLink>
            </div>
            
        </div>
    )
}

export default Components
