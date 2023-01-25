import React from "react";
import { useState } from "react";

export default function Hello() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {Array.from(Array(counter)).map((c, index) => {
        return <input key={c} type="text"></input>;
      })}
      <button onClick={handleClick}>Hello</button>
    </div>
  );
}
