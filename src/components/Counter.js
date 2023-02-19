import React from "react";

// This is a sample component
// Try to use this to create props for the Counter component
// Hint: The props you should use are: title, increment, decrement, count
function Counter({ role, increment, decrement, count }) {
  return (
    <div>
      <h2>
        {role}: {count}
      </h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
