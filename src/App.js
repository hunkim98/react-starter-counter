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
  // We are going to create a Market
  // We will create 3 counters for this tutorial (Manger, Staff, Guest)
  // Based on the counters, we will calculate whether the market is operatable or not

  // You can see that console log is called everytime we refresh the page (You can see the log in the browser console (F12))
  console.log("App is rendered");

  // Now let us use useState to create the counters
  // You can understand useState as a memory for the browser to store data (once browser refreshes, the data is gone)

  // What to do
  // 1. Implement 3 counters for Manager, Staff and Guest
  // 2. Implement a function to calculate whether the market is operatable or not
  //    The conditions are as follows:
  //    - (guestCount > staffCount * maxGuestsPerStaff) && (staffCount > managerCount * maxStaffsPerManager)
  //      => Market is not operatable
  // 3. Control the counters in the Control Part and show the result in the Result Part
  let isMoreStaffNeeded = false;
  let isMoreManagerNeeded = false;
  let isMarketOpen = true;

  return (
    <div className="App">
      <div className="Control">
        <div>
          {/* Example div for one manager counter. You must fill in {} and () => {} */}
          <h2>Managers: {}</h2>
          <div>
            <button onClick={() => {}}>Increment</button>
            <button onClick={() => {}}>Decrement</button>
          </div>
        </div>
        {/* Implement other counters: Staffs, Guests */}
      </div>
      <div className="Result">
        <h2>
          {/* You can use ternary operator to dynamically render div content */}
          Market Status: <span>{isMarketOpen ? "OPEN" : "CLOSED"}</span>
        </h2>
        <h4>{isMoreStaffNeeded ? "Not enough staff" : ""}</h4>
        <h4>{isMoreManagerNeeded ? "Not enough managers" : ""}</h4>
      </div>
    </div>
  );
}

export default App;
