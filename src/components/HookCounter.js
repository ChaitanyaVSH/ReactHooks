import React, { useState } from "react";

const HookCounter = (props) => {
  const [count, handleCounter] = useState(0);
  return (
    <div>
      <h1>This is the Hook Counter</h1>
      <button onClick={() => handleCounter(count + 1)}>Count {count}</button>
    </div>
  );
};

export default HookCounter;
