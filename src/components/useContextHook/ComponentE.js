import React, { useContext } from "react";
import { userContext } from "../../App";

function ComponentE() {
  const user = useContext(userContext);
  return (
    <div className="container">
      <h1>This is the Component E</h1>
      <strong>Steps to consume context using hook</strong>
      <ol>
        <li>Import useContext</li>
        <li>Import the necessary Contexts</li>
        <li>store the context in a local varible</li>
      </ol>
      {user}
    </div>
  );
}

export default ComponentE;
