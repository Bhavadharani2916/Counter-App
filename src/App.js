import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counterapp" >
      <h1>COUNTER APP</h1>
      <div className="container">
        <h2>{count}</h2>
        </div>
          <div className="button">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
       
      </div>
    </div>
  );
}

export default Counter;
