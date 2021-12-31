import React, { useState, useMemo, useEffect, useCallback } from "react";

export default function UseMemoComponent() {
  /**
   * memoize the function (useCallback) vs memoize the value (useMemo)
   * referential equality for objects, arrays or functions
   */
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  const displayName = useCallback(
    (greeting) => {
      return greeting + " " + name;
    },
    [name]
  );

  function factorial(n) {
    let i = 0;
    while (i < 200000000) i++;
    if (n < 0) {
      return -1;
    }
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  return (
    <div>
      <h1>
        Factorial of {counter} is {result}
      </h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>increment</button>
        <button onClick={() => setCounter(counter - 1)}>decrement</button>
      </div>
      <hr></hr>
      <div>
        <label>Enter name</label>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr></hr>
      <DisplayName displayName={displayName} />
    </div>
  );
}

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName("Hello"));
    console.log("re-rendered");
  }, [displayName]);
  return <p>Name is {value}</p>;
};
