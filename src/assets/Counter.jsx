import React from "react";
import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="submit-button">
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>+</button>
          <h2>{count}</h2>
          <button className="minus" disabled={count === 0} onClick={minus}>
            -
          </button>
        </div>
        <div className="col">
          <h2>{props.Price * count}</h2>
        </div>
      </div>
    </>
  );
};

export default Counter;
