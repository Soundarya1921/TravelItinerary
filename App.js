
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Components from './Components.jsx';
import Flights from './Flights.jsx';
import HotelBooking from './HotelBooking.jsx';
import Rentalcars from './Rentalcars.jsx';
import Login from './Login.jsx';
import Booking from './Booking.jsx';
import ContactUs from './ContactUs.jsx';

import Trending from './Trending.jsx';
import Internationalflights from './Internationalflights.jsx';  
import Domesticflights from './DomesticFlights.jsx';


function App() {
  return (
    <div>
      <Components></Components>
      
     
        <Routes>




          <Route path="/flight" element={<Flights/>}/>
          <Route path="/hotel-booking" element={<HotelBooking/>}/>
          <Route path="/rental-cars" element={<Rentalcars/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/international" element={<Internationalflights />} />
          <Route path="/domestic" element={<Domesticflights />} /> 
          <Route path="/trending" element={<Trending />} />
          
        
        
        
        
        </Routes>
        
     
    </div>
  );
}

export default App;
