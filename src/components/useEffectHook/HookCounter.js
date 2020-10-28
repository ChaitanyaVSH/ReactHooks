import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const addItem = () => {
    setCount((prevCount) => prevCount + 1);
  };

  /**
   * useEffect() will be invoked every time a render method is called.
   */
  useEffect(() => {
    console.log("updating");
    document.title = `Pressed ${count} times`;
  }, [count]);

  const handleClick = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>Hook counter</h1>
      <input type="text" name="username" onChange={handleClick} />
      <button onClick={addItem}>Click here: {count}</button>
    </div>
  );
}

export default HookCounter;
