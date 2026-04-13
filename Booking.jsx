
import React, { useState } from 'react'
import './App.css';
import train1 from "./img/icons8-train-66.png";

function Booking() {
  const [from, setFrom] = useState("Bangalore");
  const [to, setTo] = useState("Chennai");
  const [date, setDate] = useState("");
  const [type, setType] = useState("bus");
  const [stops, setStops] = useState(["Mysore", "Salem", "Vellore"]);
  const [input, setInput] = useState("");

  const addStop = () => {
    if (!input.trim() || stops.length >= 20) return;
    setStops([...stops, input]);
    setInput("");
  };

  const removeStop = (i) => {
    setStops(stops.filter((_, index) => index !== i));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ from, to, date, type, stops });
    alert("Booking Submitted!");
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="heading"><img src={train1} alt="" width={30} height={30} /> Travel Booking</h2>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <label>
              <input
                type="radio"
                value="bus"
                checked={type === "bus"}
                onChange={(e) => setType(e.target.value)}
              />
              Bus
            </label>

            <label>
              <input
                type="radio"
                value="train"
                checked={type === "train"}
                onChange={(e) => setType(e.target.value)}
              />
              Train
            </label>
          </div>

          {/* From & To */}
          <div className="row">
            <input
              className="input"
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
            />

            <input
              className="input"
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
            />
          </div>

          {/* Date */}
          <input
            className="input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Stops */}
          <div className="row">
            <input
              className="inputs"
              type="text"
              placeholder="Add stop"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="button" className="addBtn" onClick={addStop}>
              Add
            </button>
          </div>

          {/* Stops List */}
          <div>
            {stops.map((stop, i) => (
              <span key={i} className="tag">
                {stop}
                <button
                  type="button"
                  className="removeBtn"
                  onClick={() => removeStop(i)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          {/* Submit */}
          <button type="submit" className="submitBtn">
            Search Tickets
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;   // ✅ FIXED