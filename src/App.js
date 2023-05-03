import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

/**
 * React can be seen as HTML + JS + CSS(Optional) in one package
 * Inside the function we write functions that we would like to trigger when needed (e.g. onClick, page load, etc.)
 * The function returns the HTML code that we want to display
 * The HTML code is written in JSX (JavaScript XML) which is a combination of HTML and JavaScript
 *
 * A function is called a component in React
 * You can understand component as a package of HTML, CSS and JS
 * The important thing is that in react, you create components with functions
 * In previous versions of React, you would create components with classes (even Android Studio Java uses classes to create Mobile Views)
 *
 * App.js is the main component(or function) that is called when the app is loaded.
 * App.js can be seen as the main function that calls other (children) functions
 */

const maxGuestsPerStaff = 2;
const maxStaffsPerManager = 2;

function App() {
  console.log("Root app has rendered!");

  // Our counters
  const [guestCount, setGuestCount] = useState(0);
  const [managerCount, setManagerCount] = useState(1);
  const [staffCount, setStaffCount] = useState(1);

  // Our flags
  const [isMoreStaffNeeded, setIsMoreStaffNeeded] = useState(false);
  const [isMoreManagerNeeded, setIsMoreManagerNeeded] = useState(false);
  const [isMarketOpen, setIsMarketOpen] = useState(true);

  // useEffect can be used to trigger a function when a variable changes
  // The second parameter is an array of variables that we want to watch for changes
  useEffect(() => {
    console.log(`Guest count has changed to ${guestCount}!`);
  }, [guestCount]);

  // Real use case of useEffect (check if we need more staff)
  useEffect(() => {
    // Check if we need more staff
    if (guestCount > staffCount * maxGuestsPerStaff) {
      setIsMoreStaffNeeded(true);
    } else {
      setIsMoreStaffNeeded(false);
    }
  }, [guestCount, staffCount]);

  // Real use case of useEffect (check if we need more managers)
  useEffect(() => {
    // Check if we need more managers
    if (staffCount > managerCount * maxStaffsPerManager) {
      setIsMoreManagerNeeded(true);
    } else {
      setIsMoreManagerNeeded(false);
    }
  }, [staffCount, managerCount]);

  useEffect(() => {
    // Let the market close if we need more staff and managers
    if (isMoreStaffNeeded || isMoreManagerNeeded) {
      setIsMarketOpen(false);
    } else {
      setIsMarketOpen(true);
    }
  }, [isMoreManagerNeeded, isMoreStaffNeeded]);

  const incrementGuestCount = () => {
    setGuestCount(guestCount + 1);
  };

  const decrementGuestCount = () => {
    setGuestCount(guestCount - 1);
  };

  const incrementManagerCount = () => {
    setManagerCount(managerCount + 1);
  };

  const decrementManagerCount = () => {
    setManagerCount(managerCount - 1);
  };

  const incrementStaffCount = () => {
    setStaffCount(staffCount + 1);
  };

  const decrementStaffCount = () => {
    setStaffCount(staffCount - 1);
  };

  return (
    <div className="App">
      <div className="Control">
        {/* Manager Component */}
        <div>
          <h2>Managers: {managerCount}</h2>
          <div>
            <button onClick={incrementManagerCount}>New Manager</button>
            <button onClick={decrementManagerCount}>Manager Resign</button>
          </div>
        </div>
        {/* Staff Component */}
        <div>
          <h2>Staffs: {staffCount}</h2>
          <div>
            <button onClick={incrementStaffCount}>New Staff</button>
            <button onClick={decrementStaffCount}>Staff Resign</button>
          </div>
        </div>
        {/* Guest Component */}
        <div>
          <h2>Guests: {guestCount}</h2>
          <div>
            <button onClick={incrementGuestCount}>New Guest</button>
            <button onClick={decrementGuestCount}>Guest Exit</button>
          </div>
        </div>
      </div>
      <div className="Result">
        <h2>
          Market Status: <span>{isMarketOpen ? "OPEN" : "CLOSED"}</span>
        </h2>
        <h4>{isMoreStaffNeeded ? "Not enough staff" : ""}</h4>
        <h4>{isMoreManagerNeeded ? "Not enough managers" : ""}</h4>
      </div>
    </div>
  );
}

export default App;
