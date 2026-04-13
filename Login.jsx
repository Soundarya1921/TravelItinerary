import React, { useState } from "react";
import './App.css';

function Login() {
    const [type, setType] = useState("login");

    
    let forms;

    if (type === "login") {
        forms = (
            <>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter password" />
            </>
        );
    } else {
        forms = (
            <>
                <input type="text" placeholder="Enter your username" />
                <input type="text" placeholder="Enter your group name" />
                <input type="email" placeholder="Enter your email" />

                <div className="row">
                    <input type="email" placeholder="Confirm email" />

                    <div className="phone">
                        <select>
                            <option>+91</option>
                            <option>+41</option>
                            <option>+98</option>
                            <option>+99</option>
                        </select>
                        <input type="text" placeholder="Phone number" />
                    </div>
                </div>

                <textarea placeholder="Message"></textarea>
            </>
        );
    }

    return (
        <div className="form-container">
            <div className="form-card">

                <h2 className="form-title">Login / Sign Up</h2>

                <div className="toggle">
                    <button onClick={() => setType("login")}
                        className={type === "login" ? "active" : ""}>
                        Login
                    </button>

                    <button onClick={() => setType("sign-up")}
                        className={type === "sign-up" ? "active" : ""}>
                        Signup
                    </button>
                </div>

                <form className="form">

                   
                    {forms}

                    <button className="submit">
                        {type === "login" ? "Login" : "Sign Up"}
                    </button>

                </form>
                <button  className="helpbutton"> need help ?</button>
                
            </div>
          
                    
                
            
        </div>
        
    );
}

export default Login;