import React, { useState } from "react";

function HookWithArray() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  //console.log(items);
  return (
    <div>
      <h1>useState() with Array</h1>
      <button onClick={addItem}>Add Item</button>
      <br />
      Items:
      <ul>
        {items.map((item) => (
          <h2 key={item.id}>Item: {item.value}</h2>
        ))}
      </ul>
    </div>
  );
}

export default HookWithArray;
