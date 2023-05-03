import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";

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

  useEffect(() => {
    console.log(`Guest count has changed to ${guestCount}!`);
  }, [guestCount]);

  useEffect(() => {
    if (guestCount > staffCount * maxGuestsPerStaff) {
      setIsMoreStaffNeeded(true);
    } else {
      setIsMoreStaffNeeded(false);
    }
  }, [guestCount, staffCount]);

  useEffect(() => {
    if (staffCount > managerCount * maxStaffsPerManager) {
      setIsMoreManagerNeeded(true);
    } else {
      setIsMoreManagerNeeded(false);
    }
  }, [staffCount, managerCount]);

  useEffect(() => {
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

  // This is the power of react
  // You can easily cooperate with other developers by creating components
  // Each developer can create their own components and later on, you can combine them together to create a bigger component
  return (
    <div className="App">
      <div className="Control">
        {/* Manager Component */}
        <Counter
          role="Managers"
          count={managerCount}
          increment={incrementManagerCount}
          decrement={decrementManagerCount}
        />
        {/* Staff Component */}
        <Counter
          role="Staffs"
          count={staffCount}
          increment={incrementStaffCount}
          decrement={decrementStaffCount}
        />
        {/* Guest Component */}
        <Counter
          role="Guests"
          count={guestCount}
          increment={incrementGuestCount}
          decrement={decrementGuestCount}
        />
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
