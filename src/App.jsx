import React, { useState } from 'react';
import './index.css'; // Import the CSS file

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 100) {
      alert('The Value Should be Less than 100');
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count <= 0) {
      alert('The Value Should be Greater than 0');
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Counter App 😎</h1>
        <div className="counter">
          <button className="button decrement" onClick={decrement}>Decrement</button>
          <p className="count">Count : {count}</p>
          <button className="button" onClick={increment}>Increment</button>
        </div>
      </div>
    </>
  );
};

export default App;
