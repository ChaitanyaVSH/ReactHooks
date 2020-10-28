import React, { useState } from "react";

export default function HookSuperCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h1>Hook Counter with Previous State</h1>
      Count: {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement Count
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
}
