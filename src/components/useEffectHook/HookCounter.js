import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `Pressed ${count} times`;
  });
  return (
    <div>
      <h1>Hook counter</h1>
      <button onClick={addItem}>Click here: {count}</button>
    </div>
  );
}

export default HookCounter;
