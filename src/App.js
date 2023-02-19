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

  // First let us understand how react renders a component

  // You can see that console log is called everytime we refresh the page (You can see the log in the browser console (F12))
  console.log("App is rendered");

  // You may use let variable inside a react functional component
  // But an update to a let variable will not trigger a re-render
  let triggerCount = 0;

  function trigger() {
    // trigger count variable is updated inside the function
    // However, the change of variable is not reflected in the UI (= The function is not called again)
    // For more information, please refer to the following link:
    //1. https://reactjs.org/docs/state-and-lifecycle.html
    //2. https://stackoverflow.com/questions/58544796/can-i-use-let-in-react-function-component

    triggerCount++;
    alert(`You clicked the button ${triggerCount} times!`);
  }

  return (
    <div className="App">
      <div className="Control">
        <button
          onClick={
            // This is an example of how to call a function when a button is clicked
            // We are going to call the function called "trigger"
            trigger
          }
        >
          Trigger!
        </button>
        {/* You can directly render a variable inside html thanks to JSX */}
        <div>{triggerCount}</div>
      </div>
      <div className="Result">Result Part</div>
    </div>
  );
}

export default App;
