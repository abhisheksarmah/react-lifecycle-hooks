import React, { useState, useMemo } from "react";

export default function UseMemoComponent() {
  /**
   * optmise expensive operation
   * referential equality
   */
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

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
      <DisplayName name={name} />
    </div>
  );
}

const DisplayName = React.memo(({ name }) => {
  console.log("re-rendered");
  return <p>Name is {name}</p>;
});
