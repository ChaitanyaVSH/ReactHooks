import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouse = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    // console.log("useEffect Called");
    window.addEventListener("mousemove", logMouse);

    // This function is returned when the component unmounts.
    return () => {
      console.log("Component Unmounting");
      window.removeEventListener("mousemove", logMouse);
    };
  }, []);
  return (
    <div>
      <h1>Hook Mouse</h1>
      <h2>X: {x}</h2>
      <h2>Y: {y}</h2>
    </div>
  );
}

export default HookMouse;
