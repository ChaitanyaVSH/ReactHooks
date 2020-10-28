import React, { useState } from "react";

function HookCounterObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <h1>useState() Hook with Object</h1>
      <label>FirstName:</label>
      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={(event) =>
          setName({ ...name, firstName: event.target.value })
        }
      />
      <br />
      <label>LastName:</label>
      <input
        type="text"
        name="lastName"
        value={name.lastName}
        onChange={(event) => setName({ ...name, lastName: event.target.value })}
      />
      <br />
      <h2>Your First Name is: {name.firstName}</h2>
      <h2>Your Last Name is: {name.lastName}</h2>
    </div>
  );
}

export default HookCounterObject;
